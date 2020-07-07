import React from 'react';
import styled from 'styled-components';
import { PostOption } from '../Icons';

const IconContainer = styled.div`
  padding: 10px;
`;

const ModalContainer = styled.div`
  display: ${(props) => props.postOptionContainerDisplay};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: 50px;
`;

const ModalContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  text-align: center;
  flex-direction: column;
`;
const ModalContents = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 30%;
  max-width: 300px;
`;
const ModalItem = styled.li`
  width: 100%;
  padding: 20px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const modalContentsTextList = [
  { index: 1, label: '부적절한 콘텐츠 신고', type: '1' },
  { index: 2, label: '팔로우 취소', type: '1' },
  { index: 3, label: '게시물로 이동', type: '2' },
  { index: 4, label: '공유하기', type: '2' },
  { index: 5, label: '링크 복사', type: '2' },
  { index: 6, label: '퍼가기', type: '2' },
  { index: 7, label: '취소', type: '2' },
];

const modalContentsTextListMe = [
  { index: 1, label: '게시물로 이동', type: '1' },
  { index: 2, label: '공유하기', type: '1' },
  { index: 3, label: '링크 복사', type: '1' },
  { index: 4, label: '퍼가기', type: '1' },
  { index: 5, label: '취소', type: '1' },
];

export default ({
  postOptionContainerDisplay,
  showPostOption,
  modalEl,
  closeModal,
  cancel,
}) => {
  return (
    <>
      <IconContainer onClick={showPostOption}>
        <PostOption />
      </IconContainer>

      <ModalContainer postOptionContainerDisplay={postOptionContainerDisplay}>
        <ModalContentsContainer ref={modalEl}>
          <ModalContents>
            {modalContentsTextList.map((content) => {
              if (content.index === 7) {
                return (
                  <ModalItem onClick={cancel} key={content.index}>
                    {content.label}
                  </ModalItem>
                );
              }
              return <ModalItem key={content.index}>{content.label}</ModalItem>;
            })}
          </ModalContents>
        </ModalContentsContainer>
      </ModalContainer>
    </>
  );
};
