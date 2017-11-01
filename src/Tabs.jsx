import '../style';
import React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import SwipeableTabContent from 'rc-tabs/lib/SwipeableTabContent';
import TabContent from 'rc-tabs/lib/TabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderTabBar=()=>{

    const { children, animated, speed, pageSize, tabBarhammerOptions, onTabClick } = this.props;
    if (children.length > pageSize) {
      return (
        <SwipeableInkTabBar
          onTabClick={onTabClick}
          speed={speed}
          pageSize={pageSize}
          hammerOptions={tabBarhammerOptions}
        />
      );
    }
    return <InkTabBar inkBarAnimated={animated} onTabClick={onTabClick}/>;
  }

  renderTabContent=()=>{
    const { animated, swipeable, hammerOptions } = this.props;
    return swipeable ? (
      <SwipeableTabContent animated={animated} hammerOptions={hammerOptions} />
    ) : (
      <TabContent animated={animated} />
    );
  }

  render() {
    return (
      <RcTabs
        renderTabBar={this.renderTabBar.bind(this)}
        renderTabContent={this.renderTabContent.bind(this)}
        {...this.props}
      />
    );
  }
}
Tabs.TabPane=TabPane;
Tabs.defaultProps = {
  prefixCls: 'am-tabs',
  animated: true,
  swipeable: true,
  tabBarPosition: 'top',
  hammerOptions: {},
  tabBarhammerOptions: {},
  pageSize: 5,
  speed: 8,
  onChange() {},
  onTabClick() {},
};
Tabs.propTypes = {

  activeKey: React.PropTypes.string,
  defaultActiveKey: React.PropTypes.string,
  onChange:React.PropTypes.func,
  onTabClick:React.PropTypes.func,
  tabBarPosition:React.PropTypes.oneOf(['top', 'bottom']),
  animated:React.PropTypes.bool,
  swipeable:React.PropTypes.bool,
  /*web only*/
  className: React.PropTypes.string,
  prefixCls: React.PropTypes.string,
};
Tabs.displayName = "Tabs";
module.exports=Tabs;
