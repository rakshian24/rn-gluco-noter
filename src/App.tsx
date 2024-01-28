import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import AppTitle from './components/AppTitle';
import {useTranslation} from 'react-i18next';
import ReadingDate from './components/ReadingDate';
import ReadingType from './components/ReadingType';
import Reading from './components/Reading';
import InsulinDose from './components/InsulinDose';

function App(): JSX.Element {
  const {t} = useTranslation();
  const [date, setDate] = useState(new Date());
  const [readingType, setReadingType] = useState('');
  const [readingValue, setReadingValue] = useState('');
  const [insulinDoseValue, setInsulinDoseValue] = useState('');

  const hideInsulinSelect =
    readingType === 'AB_1hr' || readingType === 'AL_1hr' || readingType === '';

  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Box height="100%" py="$1" px="$3" bgColor="$emerald100">
          <AppTitle title={t('appTitle')} />
          <ReadingDate date={date} setDate={setDate} />
          <ReadingType
            readingType={readingType}
            setReadingType={setReadingType}
          />
          <Reading
            readingValue={readingValue}
            setReadingValue={value => {
              if (value.match('^[0-9]+$')) {
                setReadingValue(value);
              } else if (value.length === 0) {
                setReadingValue('');
              }
            }}
          />

          {!hideInsulinSelect && (
            <InsulinDose
              insulinDoseValue={insulinDoseValue}
              setInsulinDoseValue={value => {
                if (value.match('^[0-9]+$')) {
                  setInsulinDoseValue(value);
                } else if (value.length === 0) {
                  setInsulinDoseValue('');
                }
              }}
            />
          )}
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
