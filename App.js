/*Example of SQLite Database in React Native*/
import React from 'react';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import Type from './pages/Type';
import Guest from './pages/Guest';
import Edit from './pages/Edit';
import EditPond from './pages/EditPond';
import web from './pages/web';
import TestUpdate from './pages/TestUpdate';
import Login from './pages/Login';
import RegisterPond from './pages/RegisterPond';
import Sai1 from './pages/Sai1';
import Sai2 from './pages/Sai2';
import Din1 from './pages/Din1';
import Din2 from './pages/Din2';
import Hin1 from './pages/Hin1';
import Promo from './pages/Promo';
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    
  },
  ViewUser: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  ViewAllUser: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'สถานที่',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  UpdateUser: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Edit&View',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  
  },
  Type: {
    screen: Type,
    navigationOptions: {
      title: 'ประเภท',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  
  },
  Guest: {
    screen: Guest,
    navigationOptions: {
      title: 'Guest',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: 'Edit&View',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  EditPond: {
    screen: EditPond,
    navigationOptions: {
      title: 'EditPond',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  RegisterPond: {
    screen: RegisterPond,
    navigationOptions: {
      title: 'RegisterPond',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  
  web: {
    screen: web,
    navigationOptions: {
      title: 'Location',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },

  TestUpdate: {
    screen: TestUpdate,
    navigationOptions: {
      title: 'TestUpdate',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Promo: {
    screen: Promo,
    navigationOptions: {
      title: 'Promotion',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
 
  
  
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Din1: {
    screen: Din1,
    navigationOptions: {
      title: 'ดินทราย',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Din2: {
    screen: Din2,
    navigationOptions: {
      title: 'ดินร่วน',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Sai1: {
    screen: Sai1,
    navigationOptions: {
      title: 'ทรายหยาบ',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Sai2: {
    screen: Sai2,
    navigationOptions: {
      title: 'ทรายหยาบกลาง',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Hin1: {
    screen: Hin1,
    navigationOptions: {
      title: 'หินคลุก',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },



  
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);