/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class Edit extends React.Component {
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
       
        <View style={{flex: 1,justifyContent: 'flex-start',}}>
          
        <Mybutton
          title="                       ดูบ่อทั้งหมด                       "
          customClick={() => this.props.navigation.navigate('Type')}
        />
        <Mybutton
          title="                       ดูบ่อตัวเอง                       "
          customClick={() => this.props.navigation.navigate('ViewUser')}
        />
        <Mybutton
          title="                        แก้ไขโปรไฟล์                        "
          customClick={() => this.props.navigation.navigate('UpdateUser')}
        />
        
        <Mybutton
          title="                         แก้ไขบ่อ                         "
          customClick={() => this.props.navigation.navigate('EditPond')}
        />
        <Mybutton
          title="                         Testchart                         "
          customClick={() => this.props.navigation.navigate('TestUpdate')}
        />
        <Mybutton
          title="         ออกจากระบบ        "
          customClick={() => this.props.navigation.navigate('HomeScreen')}
        />
        </View>
      </View>
      
    );
  }
}