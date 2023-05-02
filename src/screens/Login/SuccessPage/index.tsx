import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginScreenProps} from '../../../routers/LoginStack/types';
import {RoutersName} from '../../../routers/routersName';

const SuccessPage: React.FC<LoginScreenProps<RoutersName.SuccessPage>> = ({
  route,
}) => {
  const {name, email} = route.params;
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Name: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
    </View>
  );
};

export default SuccessPage;

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
});
