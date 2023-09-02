import {Menu} from "antd";
import {menuItems} from "utility/utils";
import SiderDrawer from "./SiderDrawer";

export default () => {
  return (
    <SiderDrawer>
      <Menu
        breakpoint="lg"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['3']}
        style={{height: '100%', borderRight: 0}}
        items={menuItems}
        expandIcon={false}
      />
    </SiderDrawer>

  )
};
