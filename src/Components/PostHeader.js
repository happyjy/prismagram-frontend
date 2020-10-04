import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Avatar from './Avatar';
import FatText from './FatText';
import PostOption from './PostOption/index';

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-item: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const HeaderRight = styled.div``;

const PostHeader = ({ size, avatar, username, location }) => {
  return (
    <Header>
      <HeaderLeft>
        <Avatar size={size} url={avatar} />
        <UserColumn>
          <Link to={`/${username}`}>
            <FatText text={username} />
          </Link>
          <Location>{location}</Location>
        </UserColumn>
      </HeaderLeft>
      <HeaderRight>
        <PostOption />
      </HeaderRight>
    </Header>
  );
};
export default PostHeader;
