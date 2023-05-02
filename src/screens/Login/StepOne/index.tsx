import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RoutersName} from '../../../routers/routersName';
import {LoginScreenProps} from '../../../routers/LoginStack/types';
import Input from '../../../components/Form/Input';
import {UseWatchProps, useForm, useFormState} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

type ButtonNextProps = {
  name: string;
  onPress: () => void;
};

const ButtonNext: React.FC<ButtonNextProps & UseWatchProps> = ({
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

const StepOne: React.FC<LoginScreenProps<RoutersName.StepOne>> = ({
  navigation,
}) => {
  const handleClick = () => {
    navigation.navigate(RoutersName.StepTwo);
  };

  const {handleSubmit, control} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <View style={styles.view}>
      <Input label="Name" name="name" control={control} />
      <ButtonNext
        name="name"
        onPress={handleSubmit(handleClick)}
        control={control}
      />
    </View>
  );
};

export default StepOne;

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
