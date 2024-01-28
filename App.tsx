import React from 'react';
import {SafeAreaView} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import AppTitle from './src/components/AppTitle';
import {useTranslation} from 'react-i18next';

function App(): JSX.Element {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Box height="100%" py="$1" px="$2" bgColor="$emerald100">
          <AppTitle title={t('appTitle')} />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
