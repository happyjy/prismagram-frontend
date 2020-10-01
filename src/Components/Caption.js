import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CaptionSpan = styled.span`
  line-height: 1.2;
`;

const SeeMore = styled.span`
  font-weight: 300;
  color: #8e8e8e;
  cursor: pointer;
`;

const Caption = ({ text, className }) => {
  const hasBr = text.split('\\n').length > 1;
  const [isSeeMore, setIsSeeMore] = useState(hasBr);

  const seeMoreFunc = function () {
    console.log('seeMoreFunc');
    setIsSeeMore(false);
  };
  return (
    <CaptionSpan className={className}>
      {isSeeMore && text.split('\\n')[0]}
      {isSeeMore && <SeeMore onClick={seeMoreFunc}> ...더 보기 </SeeMore>}
      {!isSeeMore &&
        text.split('\\n').map((line) => {
          return (
            <span>
              {line}
              <br />
            </span>
          );
        })}
    </CaptionSpan>
  );
};

Caption.propType = {
  text: PropTypes.string.isRequired,
};

export default Caption;
