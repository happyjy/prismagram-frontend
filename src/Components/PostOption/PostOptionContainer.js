import React, { useState, useRef } from 'react';

import PostOptionPresenter from './PostOptionPresenter';

const PostOptionContainer = () => {
  const [postOptionContainerDisplay, setPostOptionContainerDisplay] = useState(
    'none',
  );

  const showPostOption = () => {
    console.log('showPostOption');
    let postOptionContainerDisplayFlag =
      postOptionContainerDisplay === 'none' ? 'block' : 'none';
    setPostOptionContainerDisplay(postOptionContainerDisplayFlag);
  };

  const modalEl = useRef(null);

  const closeModal = (event) => {
    debugger;
    if (event.target === modalEl.current) {
      setPostOptionContainerDisplay('none');
    }
  };

  window.onclick = closeModal;

  const cancel = () => {
    setPostOptionContainerDisplay('none');
  };

  return (
    <PostOptionPresenter
      postOptionContainerDisplay={postOptionContainerDisplay}
      showPostOption={showPostOption}
      modalEl={modalEl}
      closeModal={closeModal}
      cancel={cancel}
    />
  );
};

export default PostOptionContainer;
