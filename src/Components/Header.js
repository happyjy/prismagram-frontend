import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Input from './Input';
import useInput from '../Hooks/useInput';
import { Compass, HeartEmpty, User, Home } from './Icons';
import { useQuery } from 'react-apollo-hooks';
import { ME } from '../SharedQueries';

//display: flex - 하위 component를 가로로 늘려 뜨린다.
//justify-content: center -  component를 가운데로
const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

//&: first-child, last-child: Headercolumn을 쓰는 첫번째 , 마지막 component를 selector
//text-align:으로 first, last child 위치 조절
const HeaderColumn = styled.div`
  width: 33%;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }

  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const HeaderComponent = ({ history }) => {
  // console.log("### props in header with withRouter: ", props);// return value: history, location, match obejct
  const search = useInput('');
  const { data, loading } = useQuery(ME);
  console.log('### data(useQuery(ME)) in Header.js', data);
  const onSearchSubmit = (e) => {
    // console.log(e);
    // console.log(search);
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Home />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="search"
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {loading && !data ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.username}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};

export default withRouter(HeaderComponent);
