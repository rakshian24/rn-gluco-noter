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
  readingValue: string;
  setReadingValue: React.Dispatch<React.SetStateAction<string>>;
};

const Reading = ({readingValue, setReadingValue}: Props) => {
  return (
    <FormControl
      mt={'$5'}
      size="md"
      isDisabled={false}
      isInvalid={
        !(parseInt(readingValue, 10) >= 60 && parseInt(readingValue, 10) <= 400)
      }
      isReadOnly={false}
      isRequired={false}>
      <FormControlLabel mb="$1">
        <FormControlLabelText>Reading value</FormControlLabelText>
      </FormControlLabel>
      <Input borderRadius={'$sm'}>
        <InputField
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          type="text"
          placeholder="Enter your reading value"
          value={readingValue}
          onChangeText={setReadingValue}
        />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Reading value should be between 50 and 400
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default Reading;
