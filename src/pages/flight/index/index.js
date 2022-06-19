import { PureComponent } from "react";
import { View, SwiperItem } from "@tarojs/components";
import "./index.scss";
import Tab from "../../../components/Tab";

const FLIGHT_TABS = [
  { label: "单程", id: 0 },
  { label: "多程", id: 1 },
  { label: "往返", id: 2 },
];
export default class FightIndex extends PureComponent {
  handleTabClick = (id) => {
    console.log(id);
  };
  render() {
    return (
      <View className="flight-container">
        <View className="flight-top">
          <Tab
            tabList={FLIGHT_TABS}
            onTabClick={this.handleTabClick}
            className="flight-index-tab"
          >
            <SwiperItem>000</SwiperItem>
            <SwiperItem>111</SwiperItem>
            <SwiperItem>222</SwiperItem>
          </Tab>
        </View>
      </View>
    );
  }
}
