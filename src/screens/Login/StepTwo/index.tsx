import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {RoutersName} from '../../../routers/routersName';
import {LoginScreenProps} from '../../../routers/LoginStack/types';
import Input from '../../../components/Form/Input';
import {UseWatchProps, useForm, useFormState} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

type ButtonSubmitProps = {
  name: string;
  onPress: () => void;
};

const ButtonSubmit: React.FC<ButtonSubmitProps & UseWatchProps> = ({
  name,
  onPress,
  control,
}) => {
  const {errors} = useFormState({name, control});

  return (
    <Button
      title="Submit"
      onPress={onPress}
      disabled={Object.keys(errors).length > 0}
    />
  );
};

const StepTwo: React.FC<LoginScreenProps<RoutersName.StepTwo>> = () => {
  const handleClick = (values: any) => {
    Alert.alert(JSON.stringify(values));
  };

  const {handleSubmit, control} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <View style={styles.view}>
      <Input label="Email" name="email" control={control} />
      <ButtonSubmit
        name="email"
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
  label: {
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    fontSize: 12,
    padding: 10,
    textAlign: 'left',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
  },
  inputTouched: {
    borderColor: 'green',
  },
});
