import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Layout, Icon } from 'antd';

const { Header } = Layout;

class DefaultLayoutHeader extends Component {
  onSearch = (value) => {
    this.props.history.push(`/search/${value}`)
  }

  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <span className="logo">Milo Test Project</span>
        <Input.Search className="searchInput" enterButton="Search" onSearch={this.onSearch} />
      </Header>
    );
  }
}

DefaultLayoutHeader.propTypes = {
  collapsed: PropTypes.bool,
};

export default withRouter(DefaultLayoutHeader);
