import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClickText from './ClickText';

const CaptionSpan = styled.span`
  line-height: 1.2;
`;

// const SeeMore = styled.span`
//   font-weight: 300;
//   color: #8e8e8e;
//   cursor: pointer;
// `;

const CaptionContents = ({ text, className, from = '' }) => {
  let hasBr = text.split('\\n').length > 1;

  if (from == 'PhotoModal') {
    hasBr = false;
  }

  const [isSeeMore, setIsSeeMore] = useState(hasBr);

  const OnSeeMore = function () {
    console.log('OnSeeMore');
    setIsSeeMore(false);
  };

  return (
    <CaptionSpan className={className}>
      {isSeeMore && text.split('\\n')[0]}
      {isSeeMore && (
        <ClickText text={'...더 보기'} clickFunc={OnSeeMore} style={{}}>
          {' '}
        </ClickText>
      )}
      {!isSeeMore &&
        text.split('\\n').map((line, idx) => {
          return (
            <span key={idx}>
              {line}
              <br />
            </span>
          );
        })}
    </CaptionSpan>
  );
};

CaptionContents.propType = {
  text: PropTypes.string.isRequired,
};

export default CaptionContents;
