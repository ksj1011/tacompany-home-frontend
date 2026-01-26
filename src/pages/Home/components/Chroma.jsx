import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

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
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 992px){
      font-size: 2rem;
    }
  `,
  SubLabel: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    margin-bottom: 4rem;
    text-align: center;
  `,
  ContentGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;

    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  `,
  Card: styled.div`
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 12px;
    padding: 2.5rem 2rem;
    transition: all 0.3s ease;
    border: 1px solid ${props => props.theme.palette.lightgray};

    &:hover {
      transform: translateY(-8px);
      border-color: ${props => props.theme.palette.primary};
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.2);
    }
  `,
  IconWrapper: styled.div`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  `,
  CardTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  `,
  CardDescription: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    line-height: 1.7;
  `,
  FeatureList: styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 1rem;
  `,
  FeatureItem: styled.li`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${props => props.theme.palette.primary};
      font-weight: bold;
    }
  `,
};

const Chroma = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const card1Anim = useScrollFadeIn('up', 1, 0.3);
  const card2Anim = useScrollFadeIn('up', 1, 0.4);
  const card3Anim = useScrollFadeIn('up', 1, 0.5);

  const features = [
    {
      icon: '🎬',
      title: '전문 블루월 스튜디오',
      description: '프리미엄 블루월 배경으로 완벽한 크로마키 촬영이 가능합니다.',
      items: ['4K 고화질 촬영 지원', '균일한 조명 시스템', '전문 음향 설비']
    },
    {
      icon: '✨',
      title: '실시간 합성 기술',
      description: '최신 합성 기술로 즉시 결과를 확인하며 촬영할 수 있습니다.',
      items: ['실시간 배경 합성', '즉각적인 프리뷰', '효율적인 작업 흐름']
    },
    {
      icon: '🎯',
      title: '다양한 콘텐츠 제작',
      description: '교육, 방송, 광고 등 모든 영상 콘텐츠 제작이 가능합니다.',
      items: ['교육 콘텐츠', '라이브 방송', '마케팅 영상']
    }
  ];

  const cardAnims = [card1Anim, card2Anim, card3Anim];

  return (
    <S.Wrapper id="chroma">
      <S.Label {...titleAnim}>블루월을 활용한 크로마키</S.Label>
      <S.SubLabel {...subtitleAnim}>전문 크로마키 스튜디오에서 고품질 영상 콘텐츠를 제작하세요</S.SubLabel>
      <S.ContentGrid>
        {features.map((feature, index) => (
          <S.Card key={index} {...cardAnims[index]}>
            <S.IconWrapper>{feature.icon}</S.IconWrapper>
            <S.CardTitle>{feature.title}</S.CardTitle>
            <S.CardDescription>{feature.description}</S.CardDescription>
            <S.FeatureList>
              {feature.items.map((item, idx) => (
                <S.FeatureItem key={idx}>{item}</S.FeatureItem>
              ))}
            </S.FeatureList>
          </S.Card>
        ))}
      </S.ContentGrid>
    </S.Wrapper>
  );
};

export default Chroma;
