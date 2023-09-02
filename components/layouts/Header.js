import React, {useContext} from "react";
import Image from "next/image";
import {Button, Dropdown, Space, Tooltip, Layout, Avatar} from "antd";
import {avatarMenuItems} from "utility/utils";
import LayoutContext from "contexts/LayoutContext"

const {Header} = Layout;

export default () => {
  const {mobileScreen, handleToggleMenu, collapsed} = useContext(LayoutContext)

  return (
    <Header className="d-flex justify-between" style={{paddingInline: "30px"}}>
      <div className="d-flex align-center">
        {mobileScreen ? (
          <Button
            type="ghost"
            icon={<span className={`icon-${collapsed ? "burger" : "cross"}`}/>}
            onClick={handleToggleMenu}
          />
        ) : null}
        <Image
          src="/logo.svg"
          alt="Story Teller"
          width={180}
          height={37}
          priority
        />
      </div>
      <Space size={32}>
        <Tooltip title="Help">
          <Button shape="circle" type="ghost" icon={<span className="icon-help"/>}/>
        </Tooltip>
        <Dropdown menu={{items: avatarMenuItems}} trigger={['click']} placement="bottomRight">
          <Avatar className="cursor-pointer" style={{backgroundColor: '#103B8E'}}>RJ</Avatar>
        </Dropdown>
      </Space>
    </Header>
  );
};
