import React,{ useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Sounds from './Sounds';

const SoundList: React.FC = () => {
  const { grey } = useContext(ThemeContext);

  return(
    <View style={{flex: 1, backgroundColor: grey}}>
      <Sounds />
    </View>
  );
}

export default SoundList;