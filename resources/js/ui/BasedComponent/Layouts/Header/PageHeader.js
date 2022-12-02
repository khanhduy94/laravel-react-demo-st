import React from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { ChromeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import BFlex from '../../BFlex';

import { useSelector } from "react-redux";
import { selectUsername } from "../../../Store/userSlice";

const BasicFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BasicFlexItem = styled.div`
  margin-right: 10px
`

const Navigation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);
`

const LeftSideNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Logo = styled.img`
  margin-bottom: 20px;
  order: 2;
`

// @media (max-width: 768px) {
//   flex-direction: column;
// }

function AccountBar(props) {
  const loginName = props.username || 'Login'

  return (
    <BasicFlex>
      <BasicFlexItem>{{loginName}}</BasicFlexItem>
      <BasicFlexItem>Help</BasicFlexItem>
    </BasicFlex>
  );
}

function PageHeader() {
  const location = useLocation();
  const username = useSelector(selectUsername);

  const items = [
    {
      label: (<a href="/">Home</a>),
      key: '/',
    },
    {
      label: (<a href="/product">Product</a>),
      key: '/product',
    },
    {
      label: (<a href="/about">About</a>),
      key: '/about',
    },
  ];

  return (
    <Navigation>
      <BasicFlex>
        <BFlex>
          <ChromeOutlined style={{ fontSize: '32px', color: '#08c' }}></ChromeOutlined>
          <h2>Luna Forever</h2>
        </BFlex>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal" items={items}
        />
      </BasicFlex>
      <AccountBar username={username} />
    </Navigation>
  );
}

export default PageHeader;