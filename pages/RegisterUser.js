/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, Picker, StyleSheet, Text } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mytextinputpassword from './components/Mytextinputpassword';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default class RegisterUser extends React.Component {
  state = { department: '' }
  updateDepartment = (department) => {
    this.setState({ department: department })
  }

  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_contact: '',

      user_password: '',
      user_pondname: '',
      user_price: '',
      user_time: '',
      user_type: '',
      user_addresspond: '',

    };
  }
  register_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_password } = this.state;
    const { user_pondname } = this.state;
    const { user_type } = this.state;
    const { user_price } = this.state;
    const { user_time } = this.state;
    const { user_addresspond } = this.state;
    //alert(user_name, user_lastname, user_contact, user_address, user_bod);
    if (user_name) {

      if (user_contact) {

        if (user_password) {
          if (user_pondname) {
            if (user_type) {
              if (user_price) {
                if (user_time) {
                  if (user_addresspond) {
                    db.transaction(function (tx) {
                      tx.executeSql(
                        'INSERT INTO table_user (user_name, user_contact,  user_password,user_pondname,user_type,user_price,user_time,user_addresspond) VALUES (?,?,?,?,?,?,?,?)',
                        [user_name, user_contact, user_password, user_pondname, user_type, user_price, user_time, user_addresspond],
                        (tx, results) => {
                          console.log('Results', results.rowsAffected);
                          if (results.rowsAffected > 0) {
                            Alert.alert(
                              'Success',
                              'You are Registered Successfully',
                              [
                                {
                                  text: 'Ok',
                                  onPress: () =>
                                    that.props.navigation.navigate('Login'),
                                },
                              ],
                              { cancelable: false }
                            );
                          } else {
                            alert('Registration Failed');
                          }

                        }
                      );
                    });
                  } else {
                    alert('Please fill Password');
                  }
                } else {
                  alert('Please fill Password');
                }

              } else {
                alert('Please fill Contact Number');
              }
            } else {
              alert('Please fill Password');
            }
          } else {
            alert('Please fill Password');
          }
        } else {
          alert('Please fill Password');
        }
      } else {
        alert('Please fill Password');
      }
    } else {
      alert('Please fill Name');
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="ชื่อ"
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding: 10 }}
            />

            <Mytextinput
              placeholder="เบอร์โทร"
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding: 10 }}
            />

            <Mytextinputpassword
              placeholder="รหัสผ่าน"
              onChangeText={user_password => this.setState({ user_password })}
              maxLength={20}
              numberOfLines={1}
              multiline={true}
              style={{ textAlignVertical: 'top', padding: 10 }}
            />
            <Mytextinput
              placeholder="ใส่ชื่อบ่อ"
              value={this.state.user_pondname}
              style={{ padding:10 }}
              onChangeText={user_pondname => this.setState({ user_pondname })}
            />
            <Mytextinput
              placeholder="ประเภท ที่มีขาย"
              value={''+ this.state.user_type}
              onChangeText={user_type => this.setState({ user_type })}
              maxLength={20}
              style={{ padding:10 }}
              
            />
            
            <Mytextinput
              value={this.state.user_price}
              placeholder="ราคา"
              onChangeText={user_price => this.setState({ user_price })}
              maxLength={10}
              style={{textAlignVertical : 'top', padding:10}}
            />
            <Mytextinput
              value={this.state.user_time}time
              placeholder="เวลาเปิด/ปิด"
              onChangeText={user_time => this.setState({ user_time })}
              maxLength={20}
              style={{textAlignVertical : 'top', padding:10}}
            />
            <Mytextinput
              value={this.state.user_addresspond}time
              placeholder="ที่อยู่ของบ่อ"
              onChangeText={user_addresspond => this.setState({ user_addresspond })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{textAlignVertical : 'top', padding:10}}
            />

            <Mybutton
              title="             Submit             "
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}