/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Mybutton2 from './components/Mybutton2';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_contact: '',
      user_pondname: '',
      user_type: '',
      user_price: '',
      user_time: '',
      user_addresspond: '',
    };
  }
  searchUser = () => {
    const { input_user_contact } = this.state;
    console.log(this.state.input_user_contact);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ?',
        [input_user_contact],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            this.setState({
              user_pondname: results.rows.item(0).user_pondname,
            });
            this.setState({
              user_type: results.rows.item(0).user_type,
            });
            this.setState({
              user_price: results.rows.item(0).user_price,
            });
            this.setState({
              user_time: results.rows.item(0).user_time,
            });
            this.setState({
              user_addresspond: results.rows.item(0).user_addresspond,
            });
          } else {
            alert('ไม่เจอผู้ใช้');
            this.setState({
              user_pondname: '',
              user_type: '',
              user_price: '',
              user_time: '',
              user_addresspond: '',
            });
          }
        }
      );
    });
  };
  updateUser2 = () => {
    var that = this;
    const { input_user_contact } = this.state;
    const { user_pondname } = this.state;
    const { user_type } = this.state;

    const { user_price } = this.state;
    const { user_time } = this.state;
    const { user_addresspond } = this.state;
    if (user_pondname) {
      if (user_type) {
        if (user_price) {
          if (user_time) {
            if (user_addresspond) {
              db.transaction((tx) => {
                tx.executeSql(
                  'UPDATE table_user set user_pondname=?, user_typr=? ,  user_price=?,  user_time=?,  user_addresspond=? where user_contact=?',
                  [user_pondname, user_type, user_price, user_time, user_address, input_user_contact],
                  (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      Alert.alert('Success', 'User updated successfully',
                        [
                          { text: 'Ok', onPress: () => that.props.navigation.navigate('Edit') },
                        ],
                        { cancelable: false }
                      );
                    } else {
                      alert('Updation Failed');
                    }
                  }
                );
              });
            } else {
              alert('Please fill password');
            }
          } else {
            alert('Please fill Name');
          }
        } else {
          alert('Please fill Name');
        }
      } else {
        alert('Please fill Contact Number');
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
              placeholder="เบอร์โทร"
              style={{ padding: 10 }}
              onChangeText={input_user_contact => this.setState({ input_user_contact })}
            />
            <Mybutton
              title="Search User"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="ชื่อบ่อ"
              value={this.state.user_pondname}
              style={{ padding: 10 }}
              onChangeText={user_pondname => this.setState({ user_pondname })}
            />
            <Mytextinput
              placeholder="ประเภทที่ขาย"
              value={'' + this.state.user_type}
              onChangeText={user_type => this.setState({ user_type })}
              maxLength={10}
              style={{ padding: 10 }}
            />
            <Mytextinput
              placeholder="ราคา"
              value={'' + this.state.user_price}
              onChangeText={user_price => this.setState({ user_price })}
              maxLength={10}
              style={{ padding: 10 }}
            />
            <Mytextinput
            placeholder="เวลาเปิดปิด"
            value={'' + this.state.user_time}
            onChangeText={user_time => this.setState({ user_time })}
            maxLength={10}
            style={{ padding: 10 }}
            />

            <Mytextinput
            placeholder="ที่อยู่บ่อดิน"
            value={'' + this.state.user_addresspond}
            onChangeText={user_addresspond => this.setState({ user_addresspond })}
            maxLength={10}
            style={{ padding: 10 }}
            />
            <Mybutton
              title="Update User"
              customClick={this.updateUser2.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}