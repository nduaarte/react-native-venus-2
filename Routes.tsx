import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MusicPlayer from './src/screens/MusicPlayer';

const Routes: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return(
    <Navigator>
      <Screen name='Tocando' component={MusicPlayer} />
    </Navigator>
  );
}

export default Routes;