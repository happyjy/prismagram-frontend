import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const PhotoSlideContainer = styled.div`
  // max-width: 1000px;
  // position: relative;
  // margin: auto;
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const fade = keyframes`
  from {opacity: .4} 
  to {opacity: 1}
`;

const PhotoContainer = styled.div`
  // display: none;

  animation: ${fade}
  animation-name: fade;
  animation-duration: 1.5s;
`;

const NumText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;
const ImgDiv = styled.div`
  position: absolute;
  top: 0;
  max-width: 100%;
  width: 100%;
  height: 600px;
  vertical-align: middle;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
const SlideButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;

  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Prev = styled(SlideButton)`
  // border: 1px solid red;
  border-radius: 0 3px 3px 0;
`;

const Next = styled(SlideButton)`
  // border: 1px solid blue;
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const DotContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align:center
  // margin: 0 auto;

  padding: 8px 12px;
  bottom: 0;
`;

const Dot = styled.div`
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

const PhotoSlide = ({ files }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const numPhoto = files.length;

  const plusSlides = (n) => {
    // console.log('plusSlides');
    let photoIndex = slideIndex + n;

    if (photoIndex <= -1) {
      photoIndex = numPhoto - 1;
    } else if (numPhoto === photoIndex) {
      photoIndex = 0;
    }

    setSlideIndex(photoIndex);
  };

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <PhotoSlideContainer>
      {files &&
        files.map((file, idx) => {
          // console.log({ file, idx });
          let imgStyle = {
            display: '',
          };
          let dots;

          if (slideIndex == idx) {
            imgStyle.display = 'block';
            dots = 'active';
          } else {
            imgStyle.display = 'none';
            dots = '';
          }
          return (
            <PhotoContainer key={file.id}>
              {/* <NumText /> */}
              <ImgDiv src={file.url} style={imgStyle} />
            </PhotoContainer>
          );
        })}
      {numPhoto != 1 && (
        <>
          <Prev onClick={plusSlides.bind(this, -1)}>&#10094;</Prev>
          <Next onClick={plusSlides.bind(this, 1)}>&#10095;</Next>
          <DotContainer>
            {files.map((file, idx) => {
              if (idx == slideIndex) {
                return (
                  <Dot
                    onClick={currentSlide.bind(this, idx)}
                    style={{ 'background-color': '#0095f6' }}
                  ></Dot>
                );
              } else {
                return <Dot onClick={currentSlide.bind(this, idx)}></Dot>;
              }
            })}
          </DotContainer>
        </>
      )}
    </PhotoSlideContainer>
  );
};

export default PhotoSlide;
