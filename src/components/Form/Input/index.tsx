import React from 'react';
import {TextInputProps} from 'react-native/types';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {UseControllerProps, useController} from 'react-hook-form';

type InputProps = {
  label: string;
};

const Input: React.FC<TextInputProps & UseControllerProps & InputProps> = ({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  label,
  onChangeText,
  ...props
}) => {
  const {
    field,
    fieldState: {invalid, isTouched, error},
  } = useController({name, control, rules, shouldUnregister, defaultValue});

  return (
    <View>
      <Text style={styles.label}>{label ? label : name}</Text>
      <TextInput
        style={[
          styles.input,
          invalid && styles.inputError,
          isTouched && styles.inputTouched,
        ]}
        numberOfLines={1}
        underlineColorAndroid={'transparent'}
        autoComplete={'off'}
        autoCapitalize="none"
        autoCorrect={false}
        clearTextOnFocus={false}
        onBlur={field.onBlur}
        value={field.value}
        ref={field.ref}
        onChangeText={text => {
          field.onChange(text);
          onChangeText && onChangeText(text);
        }}
        {...props}
      />
      {invalid && <Text style={styles.error}>{error?.message}</Text>}
    </View>
  );
};

export default Input;

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
    marginVertical: 8,
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
  },
  inputTouched: {
    borderColor: 'black',
  },
});
