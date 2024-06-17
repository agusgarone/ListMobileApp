import React from 'react';
import Home from './src/screens/Home';
import SelectList from './src/screens/SelectList';
import CreateList from './src/screens/CreateList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CreateList />
    </GestureHandlerRootView>
  );
}

export default App;
