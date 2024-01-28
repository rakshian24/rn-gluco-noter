import {Button, ButtonText, HStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {Heading} from '@gluestack-ui/themed';

type Props = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const ReadingDate = ({date, setDate}: Props) => {
  const [openDatePickerModal, setOpenDatePickerModal] =
    useState<boolean>(false);
  return (
    <>
      <DatePicker
        maximumDate={new Date()}
        modal
        open={openDatePickerModal}
        date={date}
        onDateChange={setDate}
        onConfirm={d => {
          setDate(d);
          setOpenDatePickerModal(false);
        }}
        onCancel={() => {
          setOpenDatePickerModal(false);
        }}
      />
      <HStack justifyContent="space-between" mt={'$2'}>
        <Heading fontWeight="$normal" fontSize={'$sm'}>
          Reading for:{' '}
          <Heading fontWeight="$medium" fontSize={'$sm'}>
            {moment(date).format('DD/MMM/YYYY')}
          </Heading>
        </Heading>
        <Button
          size="xs"
          variant="solid"
          action="primary"
          bgColor="#FAD1E6"
          onPress={() => setOpenDatePickerModal(true)}>
          <ButtonText color="$black">Change date </ButtonText>
        </Button>
      </HStack>
    </>
  );
};

export default ReadingDate;
