/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT *  FROM table_user   ', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>
        <Mybutton
              title="GoogleMaps"
              customClick={() => this.props.navigation.navigate('web')}
              />
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
              
              <Text>ชื่อ: {item.user_name}</Text>
              <Text>ชื่อบ่อ: {item.user_pondname}</Text>
              <Text>ประเภทที่ขาย: {item.user_type}</Text>
              <Text>ราคา: {item.user_price}</Text>
              <Text>เวลาเปิดปิด: {item.user_time}</Text>
              <Text>ที่อยู่บ่อ: {item.user_addresspond}</Text>
            </View>
          )}
        />
        
      </View>
    );
  }
}