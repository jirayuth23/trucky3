import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'https://www.google.com/maps'}}
        style={{marginTop: 20}}
      />
    );
  }
}
