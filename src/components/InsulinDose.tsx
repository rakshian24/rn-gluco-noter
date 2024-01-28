import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React from 'react';
import {Platform} from 'react-native';

type Props = {
  insulinDoseValue: string;
  setInsulinDoseValue: React.Dispatch<React.SetStateAction<string>>;
};

const InsulinDose = ({insulinDoseValue, setInsulinDoseValue}: Props) => {
  return (
    <FormControl
      mt={'$5'}
      size="md"
      isDisabled={false}
      isInvalid={
        !(
          parseInt(insulinDoseValue, 10) >= 1 &&
          parseInt(insulinDoseValue, 10) <= 40
        )
      }
      isReadOnly={false}
      isRequired={false}>
      <FormControlLabel mb="$1">
        <FormControlLabelText>Insulin dose value</FormControlLabelText>
      </FormControlLabel>
      <Input borderRadius={'$sm'}>
        <InputField
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          type="text"
          placeholder="Enter your insulin dose value"
          value={insulinDoseValue}
          onChangeText={setInsulinDoseValue}
        />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Insulin dose value should be between 1 and 40
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default InsulinDose;
