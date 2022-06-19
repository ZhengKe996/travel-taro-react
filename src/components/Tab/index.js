import { View, Swiper } from "@tarojs/components";
import { PureComponent } from "react";

import "./index.scss";

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currentId: 0 };
  }

  componentDidMount() {
    const { initTab, tabList } = this.props;
    if (initTab == undefined) {
      this.setState({
        currentId: tabList?.[0]?.["id"],
      });
      return;
    }
    this.setState({
      currentId: initTab,
    });
  }

  handleClick = (id) => {
    this.setState({
      currentId: id,
    });
    this.props.onTabClick(id);
  };

  handleChange = (e) => {
    const id = e.detail.current;
    this.setState(
      {
        currentId: id,
      },
      () => {
        this.props.onChange?.(e);
      }
    );
  };

  render() {
    const { className, tabList, children } = this.props;
    const { currentId } = this.state;
    const innerStyle = {
      width: `${100 / tabList?.length}%`,
      transform: `translateX(${currentId * 100}%)`,
    };
    return (
      <View className={`tab-container ${className}`}>
        <View className="tab-bar">
          {tabList?.map((item) => {
            return (
              <View
                className={`tab-item ${currentId === item.id ? "active" : ""}`}
                key={item.id}
                onClick={() => this.handleClick(item.id)}
              >
                {item.label}
              </View>
            );
          })}
          <View className="scroll-bar" style={innerStyle}></View>
        </View>
        <Swiper
          current={currentId}
          className="tab-content"
          onChange={this.handleChange}
        >
          {children}
        </Swiper>
      </View>
    );
  }
}
