import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

import PhotoSlider from './PhotoSlider';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import FatText from './FatText';
import CaptionContents from './CaptionContents';
import { HeartEmpty, HeartFull, Comment as CommentIcon } from './Icons';

const PhotoModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

const PhotoContentsWrapper = styled.div`
  width: 70%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  // box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex: 1;

  background-color: white;
`;

// Footer
const PhotoModalFooterContainer = styled.div`
  height: 100%;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
`;

const Caption = styled.div`
  height: 100%;
  margin: 10px 0px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &: first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const TextAreaWrapper = styled(TextareaAutosize)`
  padding: 15px;
`;

const Textarea = styled(TextAreaWrapper)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const modalRoot = document.getElementById('modal-root');

const PhotoModal = ({
  hideModal,
  avatar,
  username,
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  onKeyPress,
  comments,
  selfComments,
  caption,
  onToggleLike,
  useModal,
  onShowModal,
  onHideModal,
}) => {
  console.log('### PhotoModal: ');
  const el = document.createElement('div');

  // const hideModal = () => {
  //   console.log('hideModal');
  //   hideModal();
  // };

  // componentDidMount
  useEffect(() => {
    console.log('mounted');
    console.log({ modalRoot, el });
    modalRoot.appendChild(el);
  }, []);

  // componentWillUnmount
  useEffect(() => {
    console.log('outer will unmount');
    return () => {
      modalRoot.removeChild(el);
      console.log('in rturn will unmount');
    };
  }, []);

  // const modalDom = () => (
  //   <PhotoModalContainer>
  //     PhotoModalContainer 입니다.
  //     <button onClick={hideModal}>hideModal</button>
  //   </PhotoModalContainer>
  // );

  // Use a portal to render the children into the element

  return ReactDOM.createPortal(
    <PhotoModalContainer>
      {/* <button onClick={hideModal}>hideModal</button> */}

      <Close onClick={onHideModal}>&times;</Close>

      <PhotoContentsWrapper>
        <PhotoContainer>
          <PhotoSlider files={files} from="PhotoModal"></PhotoSlider>
        </PhotoContainer>
        <ContentsContainer>
          <PostHeader
            size="sm"
            avatar={avatar}
            username={username}
            location={location}
          ></PostHeader>
          <PhotoModalFooterContainer>
            <Caption>
              <FatText text={username} />{' '}
              <CaptionContents text={caption} from={'PhotoModal'} />
            </Caption>
            <Buttons>
              <Button onClick={onToggleLike}>
                {isLiked ? <HeartFull /> : <HeartEmpty />}
              </Button>
              <Button>
                <CommentIcon />
              </Button>
            </Buttons>
            <FatText text={`${likeCount} 명이 좋아합니다.`} />
            <Timestamp>{createdAt}</Timestamp>
          </PhotoModalFooterContainer>
          <Textarea
            placeholder={'Add a comment...'}
            value={newComment.value}
            onChange={newComment.onChange}
            onKeyPress={onKeyPress}
          />

          {/* <PostFooter
            from={'PhotoModal'}
            onToggleLike={onToggleLike}
            isLiked={isLiked}
            likeCount={likeCount}
            username={username}
            caption={caption}
            size="sm"
            avatar={avatar}
            user={(username, avatar)}
            location={location}
            files={files}
            createdAt={createdAt}
            newComment={newComment}
            currentItem={currentItem}
            onKeyPress={onKeyPress}
            comments={comments}
            selfComments={selfComments}
            useModal={useModal}
            onShowModal={onShowModal}
            onHideModal={onHideModal}
          /> */}
        </ContentsContainer>
      </PhotoContentsWrapper>
    </PhotoModalContainer>,
    el,
  );
  // return (
  //   <PhotoModalContainer>
  //     PhotoModalContainer 입니다.
  //     <button onClick={hideModal}>hideModal</button>
  //   </PhotoModalContainer>
  // );
};

export default PhotoModal;
