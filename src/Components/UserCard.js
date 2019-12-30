import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div``;

const UserCard = ({ username, isFollwoing, url, isSelf }) => (
  <Card>
    <Avatar url={url} />
    <FatText text={username}/>
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