import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenOne from './screens/screenOne';
import ScreenTwo from './screens/screenTwo';

const AppNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenOne,
    RouteNameTwo: ScreenTwo,
  },
  {
    initialRouteName: 'RouteNameTwo',
  },
);

export default createAppContainer(AppNavigator);
