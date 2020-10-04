import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import PhotoSlider from '../PhotoSlider';
import PhotoModal from '../PhotoModal';
import FatText from '../FatText';
import CaptionContents from '../CaptionContents';
import Avatar from '../Avatar';
import PostOption from '../PostOption/index';
import {
  HeartEmpty,
  HeartFull,
  Comment as CommentIcon,
  // PostOption,
} from '../Icons';

const Post = styled.div`
  ${(props) => props.theme.whiteBox} width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
  border: 1px solid #dbdbdb;
`;

// const Header = styled.div`
//   padding: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const HeaderLeft = styled.div`
//   display: flex;
//   align-item: center;
// `;

// const HeaderRight = styled.div``;

// const Caption = styled.div`
//   margin: 10px 0px;
// `;

// const UserColumn = styled.div`
//   margin-left: 10px;
// `;

// const Location = styled.span`
//   display: block;
//   margin-top: 5px;
//   font-size: 12px;
// `;

// const Files = styled.div`
//   position: relative;
//   padding-bottom: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   flex-shrink: 0;
// `;

// const File = styled.div`
//   max-width: 100%;
//   width: 100%;
//   height: 600px;
//   position: absolute;
//   top: 0;
//   background-image: url(${(props) => props.src});
//   background-size: cover;
//   background-position: center;
//   opacity: ${(props) => (props.showing ? 1 : 0)};
//   transition: opacity 0.5s linear;
//   border: 1px solid red;
// `;

// const Meta = styled.div`
//   padding: 15px;
// `;

// const Button = styled.span`
//   cursor: pointer;
// `;

// const Buttons = styled.div`
//   ${Button} {
//     &: first-child {
//       margin-right: 10px;
//     }
//   }
//   margin-bottom: 10px;
// `;

// const Comments = styled.ul`
//   margin-top: 10px;
// `;

// const Comment = styled.li`
//   margin-bottom: 7px;
//   span {
//     margin-right: 5px;
//   }
// `;

// const Timestamp = styled.span`
//   font-weight: 400;
//   text-transform: uppercase;
//   opacity: 0.5;
//   display: block;
//   margin: 10px 0px;
//   padding-bottom: 10px;
//   border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
// `;

// const Textarea = styled(TextareaAutosize)`
//   border: none;
//   width: 100%;
//   resize: none;
//   font-size: 14px;
//   &:focus {
//     outline: none;
//   }
// `;

export default ({
  user: { username, avatar },
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
}) => {
  const [useModal, setUseModal] = useState(false);

  const onShowModal = () => {
    console.log('onShowModal');
    setUseModal(true);
  };
  const onHideModal = () => {
    console.log('onHideModal');
    setUseModal(false);
  };
  return (
    <Post className="Post">
      <PostHeader
        size="sm"
        avatar={avatar}
        username={username}
        location={location}
      ></PostHeader>
      <PhotoSlider files={files} />
      <PostFooter
        from={'Post'}
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
      />
      {/* <Meta>
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
          <FatText text={username} /> <CaptionContents text={caption} />
        </Caption>
        <Comments>
          <div onClick={onShowModal}>댓글 {comments.length}개 모두 보기</div>
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
            onHideModal={onHideModal}
            size="sm"
            avatar={avatar}
            username={username}
            user={(username, avatar)}
            location={location}
            files={files}
            isLiked={isLiked}
            likeCount={likeCount}
            createdAt={createdAt}
            newComment={newComment}
            currentItem={currentItem}
            onToggleLike={onToggleLike}
            onKeyPress={onKeyPress}
            comments={comments}
            selfComments={selfComments}
            caption={caption}
          ></PhotoModal>
        )}
        <Timestamp>{createdAt}</Timestamp>
        <Textarea
          placeholder={'Add a comment...'}
          value={newComment.value}
          onChange={newComment.onChange}
          onKeyPress={onKeyPress}
        />
      </Meta> */}
    </Post>
  );
};
