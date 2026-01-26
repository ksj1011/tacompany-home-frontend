import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';
import YoutubePlay from '../../../components/YoutubePlay';
import { useScrollFadeIn } from '../../../hooks';

const VideoCard = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.palette.cardBackground};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.palette.lightgray};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) => props.theme.palette.primary};
    box-shadow: 0 12px 32px rgba(74, 158, 255, 0.3);
  }
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat center/cover url(${(props) => props.image});
  transition: transform 0.3s ease;

  ${VideoCard}:hover & {
    transform: scale(1.1);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(74, 158, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.palette.white};
    margin-left: 3px;
  }

  ${VideoCard}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
    background: ${(props) => props.theme.palette.primary};
  }
`;

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.textPrimary};
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 992px) {
      font-size: 2rem;
    }
  `,
  SubLabel: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.textSecondary};
    margin-bottom: 4rem;
    text-align: center;
  `,
  List: styled.div`
    width: 100%;
    display: grid;
    grid-gap: 14px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 3rem;
  `,
  VideoCard: VideoCard,
  ThumbnailWrapper: styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    overflow: hidden;
    background: ${(props) => props.theme.palette.background};
  `,
  Thumbnail: Thumbnail,
  PlayButton: PlayButton,
  VideoInfo: styled.div`
    padding: 1.5rem;
  `,
  VideoTitle: styled.h3`
    ${(props) => props.theme.typography.body};
    color: ${(props) => props.theme.palette.textPrimary};
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
    min-height: 2.8em;
  `,
  ButtonWrapper: styled.div``,
};

const Portfolio = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);

  const [toggle, setToggle] = useState(false);
  const [videoId, setVideoId] = useState('x9jIRRqijhY');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&channelId=UCW9df_tUT12yxsKQaJJKxFQ&key=AIzaSyCcJBMZ-0ObwfzrhEnvdWxLzOoXrAdUp10&order=date',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items || []))
      .catch((error) => console.log('error', error));
  }, []);

  const handleVideoClick = (id) => {
    setVideoId(id);
    setToggle(true);
  };

  return (
    <S.Wrapper id="pho">
      <S.Label {...titleAnim}>TA컴퍼니와 함께 한 작업들</S.Label>
      <S.SubLabel {...subtitleAnim}>다양한 분야의 영상 제작 경험과 노하우를 확인하세요</S.SubLabel>
      <S.List>
        {videos.map((item, index) => (
          <S.VideoCard
            key={`${item.id.videoId}-${index}`}
            onClick={() => handleVideoClick(item.id.videoId)}
          >
            <S.ThumbnailWrapper>
              <S.Thumbnail image={item.snippet.thumbnails.medium.url} />
              <S.PlayButton />
            </S.ThumbnailWrapper>
            <S.VideoInfo>
              <S.VideoTitle>{item.snippet.title}</S.VideoTitle>
            </S.VideoInfo>
          </S.VideoCard>
        ))}
      </S.List>
      <S.ButtonWrapper>
        <a href="https://www.youtube.com/@nidnt19" target="_blank" rel="noopener noreferrer">
          <Button fill="outline">더보기</Button>
        </a>
      </S.ButtonWrapper>
      {toggle && <YoutubePlay setToggle={setToggle} videoId={videoId} />}
    </S.Wrapper>
  );
};

export default Portfolio;
