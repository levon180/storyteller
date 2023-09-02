import React, {useMemo, useState} from "react";
import {Layout, Grid} from "antd";
import LayoutContext from "contexts/LayoutContext";
import Header from "components/layouts/Header";
import Sider from "components/layouts/Sider";

const {Content} = Layout;

const {useBreakpoint} = Grid;

const MainLayout = ({children}) => {
  const screens = useBreakpoint();

  const [collapsed, setCollapsed] = useState(false);

  const mobileScreen = useMemo(() => {
    setCollapsed(!screens.lg);
    return !screens.lg;
  }, [screens.lg]);

  const handleToggleMenu = () => setCollapsed(!collapsed)

  return (
    <Layout style={{height: '100vh'}}>
      <LayoutContext.Provider value={{mobileScreen, handleToggleMenu, collapsed}}>
        <Header/>
        <Layout className="relative" style={{backgroundColor: '#171A25'}}>
          <Sider/>
          <Layout style={{
            margin: "0 30px 30px 0",
            overflow: "hidden",
            borderBottomRightRadius: "16px",
            borderBottomLeftRadius: "16px"
          }}>
            <div id="sub-header"/>

            <Content
              style={{
                margin: 0,
                overflow: "auto",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </LayoutContext.Provider>
    </Layout>
  );
};

export default MainLayout;
