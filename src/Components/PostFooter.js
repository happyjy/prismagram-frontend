import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FatText from './FatText';
import ClickText from './ClickText';
import CaptionContents from './CaptionContents';
import PhotoModal from './PhotoModal';
import { HeartEmpty, HeartFull, Comment as CommentIcon } from './Icons';

const PostFooterContainer = styled.div`
  padding: 15px;
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
`;

const Caption = styled.div`
  margin: 10px 0px;
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const PostFooter = ({
  from,
  username,
  avatar,
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  onToggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption,
  useModal,
  onShowModal,
  onHideModal,
}) => {
  return (
    <PostFooterContainer>
      <Buttons>
        <Button onClick={onToggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
      <Caption>
        <FatText text={username} />{' '}
        <CaptionContents text={caption} from={from} />
      </Caption>
      <Comments>
        <ClickText
          text={`댓글 ${comments.length}개 모두 보기`}
          clickFunc={onShowModal}
          style={{ display: 'block', marginBottom: '5px' }}
        ></ClickText>
        {/* <div onClick={onShowModal}>댓글 {comments.length}개 모두 보기</div> */}
        {comments &&
          comments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
        {selfComments &&
          selfComments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
      </Comments>
      {useModal && (
        <PhotoModal
          size="sm"
          avatar={avatar}
          username={username}
          location={location}
          files={files}
          isLiked={isLiked}
          likeCount={likeCount}
          createdAt={createdAt}
          newComment={newComment}
          currentItem={currentItem}
          onToggleLike={onToggleLike}
          comments={comments}
          selfComments={selfComments}
          caption={caption}
          onKeyPress={onKeyPress}
          onShowModal={onShowModal}
          onHideModal={onHideModal}
        ></PhotoModal>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
        placeholder={'Add a comment...'}
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
      />
    </PostFooterContainer>
  );
};
export default PostFooter;
