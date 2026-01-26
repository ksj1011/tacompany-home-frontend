import React from 'react';
import styled from 'styled-components';

const S = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.85);
    justify-content: center;
    align-items: center;
    padding: 20px;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  Content: styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.3s ease;

    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 992px) {
      max-width: 100%;
    }
  `,

  CloseButton: styled.button`
    position: absolute;
    top: -40px;
    right: 0;
    width: 36px;
    height: 36px;
    background: ${props => props.theme.palette.white};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${props => props.theme.palette.background};
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
      transform: scale(1.1);
      background: ${props => props.theme.palette.primary};
      color: ${props => props.theme.palette.white};
    }

    @media (max-width: 992px) {
      top: 10px;
      right: 10px;
    }
  `,

  VideoWrapper: styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background: ${props => props.theme.palette.background};
  `,

  IFrame: styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  `,
};

const YoutubePlay = ({ videoId, setToggle }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setToggle(false);
    }
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Content>
        <S.CloseButton onClick={() => setToggle(false)}>
          ✕
        </S.CloseButton>
        <S.VideoWrapper>
          <S.IFrame
            id="player"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.VideoWrapper>
      </S.Content>
    </S.Overlay>
  );
};

export default YoutubePlay;
