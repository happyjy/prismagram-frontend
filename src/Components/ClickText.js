import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.span`
  font-weight: 300;
  color: #8e8e8e;
  cursor: pointer;
`;

const ClickText = ({ text, clickFunc, style }) => (
  <Text onClick={clickFunc} style={style}>
    {text}
  </Text>
);

ClickText.propType = {
  text: PropTypes.string.isRequired,
};

export default ClickText;
