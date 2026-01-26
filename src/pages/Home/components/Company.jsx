import React from 'react';
import styled from 'styled-components';
import { ceo } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 20px;
    margin-top: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 992px){
        margin-top: 450px;
        padding: 80px 20px;
    }
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
  ContentWrapper: styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    align-items: stretch;

    @media (max-width: 992px){
        flex-direction: column;
    }
  `,
  ImageCard: styled.div`
    flex: 0 0 380px;
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 20px;
    padding: 1.5rem;
    border: 2px solid ${props => props.theme.palette.lightgray};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    }

    @media (max-width: 992px){
        flex: none;
        height: 400px;
    }
  `,
  CEOImage: styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    border-radius: 16px;
    background: no-repeat center/cover url(${ceo});

    @media (max-width: 992px){
        min-height: 350px;
    }
  `,
  TextCard: styled.div`
    flex: 1;
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 20px;
    padding: 3rem;
    border: 2px solid ${props => props.theme.palette.lightgray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    }

    @media (max-width: 992px){
        padding: 2rem;
    }
  `,
  Quote: styled.div`
    font-size: 3rem;
    color: ${props => props.theme.palette.primary};
    line-height: 1;
    margin-bottom: 1.5rem;
  `,
  TextContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
  Paragraph: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    line-height: 1.8;
    font-size: 1.05rem;

    &:first-child {
      color: ${props => props.theme.palette.textPrimary};
      font-weight: 600;
      font-size: 1.2rem;
    }

    @media (max-width: 992px){
        font-size: 0.95rem;
    }
  `,
  Highlight: styled.span`
    color: ${props => props.theme.palette.primary};
    font-weight: 700;
  `,
  ValuesSection: styled.div`
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 992px){
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
  `,
  ValueCard: styled.div`
    background: ${props => props.theme.palette.background};
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.2);
    }
  `,
  ValueIcon: styled.div`
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `,
  ValueTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  `,
  ValueDescription: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
  `,
};

const Company = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const imageAnim = useScrollFadeIn('left', 1, 0.4);
  const textAnim = useScrollFadeIn('right', 1, 0.4);
  const value1Anim = useScrollFadeIn('up', 1, 0.6);
  const value2Anim = useScrollFadeIn('up', 1, 0.7);
  const value3Anim = useScrollFadeIn('up', 1, 0.8);

  const values = [
    {
      icon: '💡',
      title: '창의성',
      description: '일반적인 광고가 아닌 창의적이고 스토리가 있는 영상을 제작합니다'
    },
    {
      icon: '🎯',
      title: '전문성',
      description: '최신 장비와 기술력으로 최고 품질의 결과물을 제공합니다'
    },
    {
      icon: '🤝',
      title: '신뢰성',
      description: '고객과의 약속을 지키며 투명하고 정직하게 일합니다'
    }
  ];

  const valueAnims = [value1Anim, value2Anim, value3Anim];

  return (
    <S.Wrapper id="home">
      <S.Label {...titleAnim}>회사소개</S.Label>
      <S.SubLabel {...subtitleAnim}>상상 그 이상의 영상을 만듭니다</S.SubLabel>

      <S.ContentWrapper>
        <S.ImageCard {...imageAnim}>
          <S.CEOImage />
        </S.ImageCard>

        <S.TextCard {...textAnim}>
          <S.Quote>"</S.Quote>
          <S.TextContent>
            <S.Paragraph>안녕하세요, 티에이컴퍼니 대표 김태식입니다</S.Paragraph>
            <S.Paragraph>
              티에이컴퍼니는 <S.Highlight>'상상 그 이상'</S.Highlight>이라는 모토를 가지고 회사를 설립하였습니다.
            </S.Paragraph>
            <S.Paragraph>
              다가오는 뉴노멀 시대에 맞추어 그동안 혁신적이지 않고 동일하기만 하였던 영상업에 대해
              한걸음 더 혁신적인 영상을 만들기 위하여 회사를 설립하였습니다.
            </S.Paragraph>
            <S.Paragraph>
              저희 TA컴퍼니는 일반적인 광고 영상이 아닌 좀 더 창의적이며 스토리가 있는 영상과 광고를 만들 것이며,
              이는 고객님들께 최선과 열심이 아닌 <S.Highlight>'최고의 영상'</S.Highlight>으로 보여드릴 것을 약속드립니다.
            </S.Paragraph>
          </S.TextContent>
        </S.TextCard>
      </S.ContentWrapper>

      <S.ValuesSection>
        {values.map((value, index) => (
          <S.ValueCard key={index} {...valueAnims[index]}>
            <S.ValueIcon>{value.icon}</S.ValueIcon>
            <S.ValueTitle>{value.title}</S.ValueTitle>
            <S.ValueDescription>{value.description}</S.ValueDescription>
          </S.ValueCard>
        ))}
      </S.ValuesSection>
    </S.Wrapper>
  );
};

export default Company;
