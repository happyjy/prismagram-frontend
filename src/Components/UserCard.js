import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvartar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

const UserCard = ({ username, isFollwoing, url, isSelf }) => (
  <Card>
    <EAvartar url={url} size={"md"}/>
    <ELink to={`/${username}`}>
      <FatText text={username}/>
    </ELink>
    {!isSelf && <Button text={isFollwoing ? "Unfollow" : "Follow" } />}
  </Card>
);

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  isFollwoing: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;