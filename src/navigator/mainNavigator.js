import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen415287Navigator from '../features/BlankScreen415287/navigator';
import BlankScreen315285Navigator from '../features/BlankScreen315285/navigator';
import CopyOfCopyOfBlankScreen015268Navigator from '../features/CopyOfCopyOfBlankScreen015268/navigator';
import CopyOfBlankScreen015260Navigator from '../features/CopyOfBlankScreen015260/navigator';
import BlankScreen015259Navigator from '../features/BlankScreen015259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen415287: { screen: BlankScreen415287Navigator },
BlankScreen315285: { screen: BlankScreen315285Navigator },
CopyOfCopyOfBlankScreen015268: { screen: CopyOfCopyOfBlankScreen015268Navigator },
CopyOfBlankScreen015260: { screen: CopyOfBlankScreen015260Navigator },
BlankScreen015259: { screen: BlankScreen015259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
