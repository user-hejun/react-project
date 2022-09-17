import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, } from 'antd';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return (
          <Link to="/">{ `option${subKey}` }</Link>
        )
        // return {
        //   key: subKey,
        //   label: `option${subKey}`,
        // };
      }),
    };
  },
);

const AppLayout: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
        <Menu.Item>nav1</Menu.Item>
        <Menu.Item>nav2</Menu.Item>
        <Menu.Item>nav3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title="subnav1">
            <Menu.Item key="1">
              <Link to="/">home</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/about">about</Link>
            </Menu.Item>
            <Menu.Item key="3">
              option
            </Menu.Item>
            <Menu.Item key="4">
              option
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default AppLayout;