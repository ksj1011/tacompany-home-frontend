import React from 'react';
import styled from 'styled-components';
import { featureImage } from '../../../assets';
import { useScrollClipPath } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${props => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${props => props.theme.palette.lightgray};
    span {
      color: ${props => props.theme.palette.secondary};
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url(${featureImage});
  `,
};

const FEAURE_ITEMS = [
  '1. 사전 미팅 자신이 하고자 하는 것을 이야기를 통해 나눕니다.',
  '2. 채널 개설 영상업로드를 위한 체널을 개설 합니다',
  '3.촬영 및 편집 교육 TA컴퍼니와 함께 촬영 그리고 편집을 함께 합니다',
  '4.업로드 자신의 체널에 그동안 만들었던 영상들을 업로드 합니다',
  '5.교육후의 A/S TA컴퍼니가 여러분의 꾸준한 유튜브 활동을 위하여 영상 업로드후의 피드백을 제공합니다',
];

const Feature = () => {
  const animatedImage = useScrollClipPath();

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>
          유트버 교육
        </S.Title>
        <S.Description>
          Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
          ullamcorper malesuada proin. Neque convallis a cras semper auctor.
        </S.Description>
        <S.List>
          {FEAURE_ITEMS.map((item, index) => (
            <S.ListItem key={item}>
              <span>•</span> {item}
            </S.ListItem>
          ))}
        </S.List>
        <S.TextButton>Read more about our serives</S.TextButton>
      </S.TextWrapper>
      <S.Image {...animatedImage} />
    </S.Wrapper>
  );
};

export default Feature;
