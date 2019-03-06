import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { SIDENAV } from '../../../constants';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DefaultLayoutSider extends Component {
  render() {
    const { collapsed, location, openKeys, onOpenChange } = this.props;
    return (
      <Sider
        className="sidemenu"
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={SIDENAV.filter(
            (menu_item) => menu_item.value === location.pathname
          ).map((item) => item.id.toString())}
          {...!collapsed && { openKeys, onOpenChange }}>
          {SIDENAV.map(
            (menu) =>
              !menu.parent &&
              (SIDENAV.filter((tmp_menu) => tmp_menu.parent === menu.id)
                .length > 0 ? (
                <SubMenu
                  key={menu.id}
                  title={
                    <span>
                      <Icon type={menu.icon} />
                      <span>{menu.label}</span>
                    </span>
                  }>
                  {SIDENAV.filter(
                    (tmp_menu) => tmp_menu.parent === menu.id
                  ).map((sub_menu) => (
                    <Menu.Item key={sub_menu.id}>
                      <Link to={sub_menu.value}>
                        <Icon type={sub_menu.icon} />
                        <span>{sub_menu.label}</span>
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={menu.id}>
                  <Link to={menu.value}>
                    <Icon type={menu.icon} />
                    <span>{menu.label}</span>
                  </Link>
                </Menu.Item>
              ))
          )}
        </Menu>
      </Sider>
    );
  }
}

DefaultLayoutSider.propTypes = {
  collapsed: PropTypes.bool,
  location: PropTypes.object,
  openKeys: PropTypes.array,
  onOpenChange: PropTypes.func,
};

export default DefaultLayoutSider;
