import React from 'react';
import { View } from 'react-native';

import theme from '../../Theme';
import Sounds from './Sounds';

const SoundList: React.FC = () => {
  return(
    <View style={{flex: 1, backgroundColor: theme.grey}}>
      <Sounds />
    </View>
  );
}

export default SoundList;