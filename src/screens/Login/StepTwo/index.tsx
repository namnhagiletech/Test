import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {RoutersName} from '../../../routers/routersName';
import {LoginScreenProps} from '../../../routers/LoginStack/types';
import Input from '../../../components/Form/Input';
import {UseWatchProps, useForm, useFormState} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {changeEmail, useLoginMutation} from '../../../store/login';
import store from '../../../store';
import {useDispatch} from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

type ButtonSubmitProps = {
  name: string;
  onPress: () => void;
  isLoading: boolean;
};

const ButtonSubmit: React.FC<ButtonSubmitProps & UseWatchProps> = ({
  name,
  onPress,
  control,
  isLoading,
}) => {
  const {errors} = useFormState({name, control});

  return (
    <Button
      title="Submit"
      onPress={onPress}
      disabled={isLoading || Object.keys(errors).length > 0}
    />
  );
};

const StepTwo: React.FC<LoginScreenProps<RoutersName.StepTwo>> = ({
  navigation,
}) => {
  const [fetchLogin, {isLoading}] = useLoginMutation();
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const globalFormData = store.getState().login;

      // i may perform revalidate here and throw error

      const result: any = await fetchLogin(globalFormData);
      if (result?.error) {
        throw result.error;
      }
      // navigate to success page
      navigation.push(RoutersName.SuccessPage, {
        email: result.data.email,
        name: result.data.name,
      });
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };

  const {handleSubmit, control} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <View style={styles.view}>
      <Input
        label="Email"
        name="email"
        control={control}
        onChangeText={value => {
          dispatch(changeEmail(value));
        }}
      />
      <ButtonSubmit
        name="email"
        isLoading={isLoading}
        onPress={handleSubmit(handleClick)}
        control={control}
      />
    </View>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
