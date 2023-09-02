import {Layout, Drawer} from "antd";
import LayoutContext from "contexts/LayoutContext";
import {useContext} from "react";

const {Sider} = Layout;

export default ({children}) => {
  const {collapsed, mobileScreen} = useContext(LayoutContext)

  if (!mobileScreen) {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={200}
      >
        {children}
      </Sider>
    )
  }

  return (
    <Drawer
      open={!collapsed}
      placement="left"
      closable={false}
      width={200}
      getContainer={false}
      bodyStyle={{
        padding: "unset"
      }}>
      <div className="full-height">
        {children}
      </div>
    </Drawer>
  )
};
