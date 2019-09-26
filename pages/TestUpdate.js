import 'babel-polyfill'
import React from 'react'
import {ScrollView, StatusBar, Dimensions, Text} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import LineChart from '../src/line-chart'

import {
  data
} from '../data'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }
  
  
  
]

export default class App extends React.Component {
  renderTabBar() {
    return <StatusBar hidden />
  }

  render() {
    const {width} = Dimensions.get('window')
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              
              
              
              <Text style={labelStyle}>ราคาหิน</Text>
              <LineChart
                data={data}
                width={width}
                height={height}
                yAxisLabel="฿"
                chartConfig={chartConfig}
                style={graphStyle}
              />
             
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}
