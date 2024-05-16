/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCards from './components/ActionCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;