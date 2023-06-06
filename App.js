import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { evaTheme } from './eva';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={evaTheme} customMapping={{}}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to your UI Kitten App!</Text>
        <StatusBar style="auto" />
      </Layout>
    </ApplicationProvider>
  );
}