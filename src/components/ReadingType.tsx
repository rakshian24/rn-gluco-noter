import {
  AlertCircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed';
import React from 'react';

const READING_TYPES = [
  {
    id: 1,
    value: 'BB',
    label: 'Before breakfast',
  },
  {
    id: 2,
    value: 'AB_1hr',
    label: 'After 1 hour of breakfast',
  },
  {
    id: 3,
    value: 'BL',
    label: 'Before lunch',
  },
  {
    id: 4,
    value: 'AL_1hr',
    label: 'After 1 hour of lunch',
  },
  {
    id: 5,
    value: 'BD',
    label: 'Before dinner',
  },
  {
    id: 6,
    value: 'AD_1hr',
    label: 'After 1 hour of dinner',
  },
];

type Props = {
  readingType: string;
  setReadingType: React.Dispatch<React.SetStateAction<string>>;
};

const ReadingType = ({setReadingType, readingType}: Props) => {
  return (
    <FormControl
      mt={'$5'}
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={false}>
      <FormControlLabel mb="$1">
        <FormControlLabelText>Reading type</FormControlLabelText>
      </FormControlLabel>
      <Select
        borderRadius={'$sm'}
        borderColor="#FAD1E6"
        onValueChange={setReadingType}
        selectedValue={readingType}>
        <SelectTrigger size="sm">
          <SelectInput placeholder="Select reading type" />
          <SelectIcon mr={'$4'}>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {READING_TYPES.map(({value, label}, index) => (
              <SelectItem key={index} label={label} value={value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Reading value should be between 50 and 400
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default ReadingType;
