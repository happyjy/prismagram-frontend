import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../Hooks/useInput';
import PostPresenter from './PostPresenter';
import { useMutation } from 'react-apollo-hooks';
// import { useMutation, useQuery } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from './PostQueries';
import { toast } from 'react-toastify';
// import { ME } from "../../SharedQueries";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  caption,
  location,
  createdAt,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput('');
  // const { data } = useQuery(ME);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });
  // const slide = () => {
  //   const totalFiles = files.length;
  //   if (currentItem === totalFiles - 1) {
  //     setTimeout(() => setCurrentItem(0), 3000);
  //   } else {
  //     setTimeout(() => setCurrentItem(currentItem + 1), 3000);
  //   }
  // };
  // useEffect(slide, [currentItem]);

  const onToggleLike = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };

  /**
   * fake comment 추가 방법
   * view, db저장을 따로
   */
  // const onKeyPress = event => {
  //   const { which } = event;
  //   if ( which === 13 ) {
  //     event.preventDefault();
  //     try {
  //       addCommentMutation();
  //     } catch {
  //       toast.error("Can't send comment");
  //     }
  //     console.log("### data.me: ", data);
  //     setSelfComments([...selfComments,
  //        {id:1,
  //        text: comment.value,
  //        user: {username: data.me.username }}]);
  //     comment.setValue("");
  //   }
  // };
  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();
        // console.log("### addComment: ", addComment);
        setSelfComments([...selfComments, addComment]);
        comment.setValue('');
      } catch (e) {
        toast.error("Can't send comment", e);
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      isLiked={isLikedS}
      likeCount={likeCountS}
      comments={comments}
      caption={caption}
      location={location}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      onToggleLike={onToggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
