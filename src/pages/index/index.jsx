import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";
import Test from "./../../components/test/index";
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>import native component in component:</Text>
        <Test title={123} />
        {/*<Text>在页面config.js里申明native组件可行</Text>*/}
      </View>
    );
  }
}
