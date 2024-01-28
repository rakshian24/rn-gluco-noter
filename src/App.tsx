import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import AppTitle from './components/AppTitle';
import {useTranslation} from 'react-i18next';
import ReadingDate from './components/ReadingDate';

function App(): JSX.Element {
  const {t} = useTranslation();
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Box height="100%" py="$1" px="$2" bgColor="$emerald100">
          <AppTitle title={t('appTitle')} />
          <ReadingDate date={date} setDate={setDate} />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
