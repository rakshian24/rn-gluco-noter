import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import {Heading} from '@gluestack-ui/themed';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <GluestackUIProvider config={config}>
        <Box height="100%" py="$1" px="$2" bgColor="$emerald100">
          <Heading fontSize="$2xl">Gluco Noter</Heading>
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
