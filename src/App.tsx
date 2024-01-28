import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import AppTitle from './components/AppTitle';
import {useTranslation} from 'react-i18next';
import ReadingDate from './components/ReadingDate';
import ReadingType from './components/ReadingType';

function App(): JSX.Element {
  const {t} = useTranslation();
  const [date, setDate] = useState(new Date());
  const [readingType, setReadingType] = useState('');

  console.log('ReadingType = ', readingType);
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
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
