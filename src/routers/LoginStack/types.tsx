import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutersName} from '../routersName';

export type LoginStackParams = {
  [RoutersName.StepOne]: undefined;
  [RoutersName.StepTwo]: undefined;
};

export type LoginScreenProps<T extends keyof LoginStackParams> =
  NativeStackScreenProps<LoginStackParams, T>;
