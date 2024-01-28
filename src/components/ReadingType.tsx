import {
  ChevronDownIcon,
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
    <Select
      mt={'$4'}
      borderColor="#FAD1E6"
      onValueChange={setReadingType}
      selectedValue={readingType}>
      <SelectTrigger variant="rounded" size="sm">
        <SelectInput placeholder="Select reading type" />
        <SelectIcon>
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
  );
};

export default ReadingType;
