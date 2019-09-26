/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View,ScrollView, Platform, StyleSheet, Text, Image, KeyboardAvoidingView, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mytextinputpassword from './components/Mytextinputpassword';
import Mybutton from './components/Mybutton';
import AwesomeButton from "react-native-really-awesome-button/src/themes/c137";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  appname: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#0099CC', 
  }
});
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_contact: '',
      user_password: '',

    };
  }

  Login = () => {
    var that = this;
    const { user_contact } = this.state;
    const { user_password } = this.state;
    console.log(this.state.user_contact);
    console.log(this.state.user_password);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ? AND user_password = ?',
        [user_contact, user_password],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            console.log(results.rows.item(0).user_password);
            Alert.alert(
              'Success',
              'You are Login Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    that.props.navigation.navigate('Edit'),
                },
              ],
              { cancelable: false }
            );

          } else {
            Alert.alert(
              'Fail', 'Wrong Password',
              [
                {
                  text: 'Ok',
                },
              ],
              { cancelable: false }
            );

          }
        }
      );
    });
  };
  render() {
     
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
        }}>
        
       
        
        <View style={{flex: 1,justifyContent: 'flex-start',}}>
        <Mytextinput
                    placeholder="ใส่เบอร์โทรศัพท์"
                    style={{ padding: 10 }}
                    onChangeText={user_contact => this.setState({ user_contact })}
        />
       <Mytextinputpassword
                    placeholder="รหัสผ่าน"
                    style={{ padding: 10 }}
                    onChangeText={user_password => this.setState({ user_password })}
        />
       <Mybutton
                    title="               Login               "
                    customClick={this.Login.bind(this)}
        />
        
        
        
        </View>

      </View>
      </ScrollView>
    );
  }
}
