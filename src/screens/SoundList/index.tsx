import React,{ useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Sounds from './Sounds';

const SoundList: React.FC = () => {
  const { dark } = useContext(ThemeContext);

  return(
    <View style={{flex: 1, backgroundColor: dark}}>
      <Sounds />
    </View>
  );
}

export default SoundList;