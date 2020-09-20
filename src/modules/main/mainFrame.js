import React, { useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";

import { Layout, Menu } from 'antd';
import {
  HomeTwoTone,
} from '@ant-design/icons';

const { Sider } = Layout;

import './mainFrame.css';
import Home from "modules/home/home";

const MainFrame = props => {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = useLocation().pathname
  const selectedKeys = pathname == '/' ? 'home' : pathname.substr(1).split("/")

  return <div>

    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={val => setCollapsed(val)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="home" icon={<HomeTwoTone />}>
            <Link to="/home" replace>
              <span className="sidebar-navtext"> Home </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">

        <div id="mainContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </div>

      </Layout>
    </Layout >
  </div>
}

export default MainFrame