import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

const ServiceCard = styled.div`
  background: ${props => props.theme.palette.cardBackground};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid ${props => props.theme.palette.lightgray};
  transition: all 0.3s ease;
  text-align: center;
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
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.palette.primary};
    box-shadow: 0 12px 32px rgba(74, 158, 255, 0.3);

    &:before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 20px;
  background: linear-gradient(135deg, ${props => props.theme.palette.primary}20, ${props => props.theme.palette.secondary}20);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
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
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;

    @media (max-width: 992px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px){
      grid-template-columns: 1fr;
    }
  `,
  ServiceCard: ServiceCard,
  IconWrapper: IconWrapper,
  ServiceTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  `,
  ServiceDescription: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  `,
  TagList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  `,
  Tag: styled.span`
    ${props => props.theme.typography.caption};
    background: ${props => props.theme.palette.background};
    color: ${props => props.theme.palette.textSecondary};
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
  `,
};

const With = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const service1Anim = useScrollFadeIn('up', 1, 0.3);
  const service2Anim = useScrollFadeIn('up', 1, 0.4);
  const service3Anim = useScrollFadeIn('up', 1, 0.5);
  const service4Anim = useScrollFadeIn('up', 1, 0.6);
  const service5Anim = useScrollFadeIn('up', 1, 0.7);
  const service6Anim = useScrollFadeIn('up', 1, 0.8);

  const services = [
    {
      icon: '🎬',
      title: '기업 홍보 영상',
      description: '기업의 가치와 비전을 효과적으로 전달하는 프리미엄 홍보 영상을 제작합니다.',
      tags: ['브랜딩', '프로모션', '인터뷰']
    },
    {
      icon: '📚',
      title: '교육 콘텐츠',
      description: '온라인 강의, 교육 자료 등 학습 효과를 극대화하는 교육용 영상을 제작합니다.',
      tags: ['온라인 강의', '튜토리얼', 'e-러닝']
    },
    {
      icon: '📺',
      title: '광고 영상',
      description: '시청자의 마음을 사로잡는 창의적이고 효과적인 광고 영상을 제작합니다.',
      tags: ['TV 광고', '온라인 광고', '바이럴']
    },
    {
      icon: '🎤',
      title: '이벤트 촬영',
      description: '컨퍼런스, 세미나, 행사 등 다양한 이벤트를 전문적으로 촬영합니다.',
      tags: ['컨퍼런스', '세미나', '행사']
    },
    {
      icon: '▶️',
      title: '유튜브 콘텐츠',
      description: '구독자 증가와 조회수 향상을 위한 매력적인 유튜브 콘텐츠를 제작합니다.',
      tags: ['브이로그', '리뷰', '챌린지']
    },
    {
      icon: '📡',
      title: '라이브 방송',
      description: '안정적이고 전문적인 라이브 방송 서비스를 제공합니다.',
      tags: ['실시간 중계', '온라인 방송', '웨비나']
    }
  ];

  const serviceAnims = [service1Anim, service2Anim, service3Anim, service4Anim, service5Anim, service6Anim];

  return (
    <S.Wrapper id="with">
      <S.Label {...titleAnim}>TA컴퍼니와 함께 한 작업들</S.Label>
      <S.SubLabel {...subtitleAnim}>다양한 분야에서 고품질 영상 콘텐츠를 제작합니다</S.SubLabel>

      <S.Grid>
        {services.map((service, index) => (
          <S.ServiceCard key={index} {...serviceAnims[index]}>
            <S.IconWrapper>{service.icon}</S.IconWrapper>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.ServiceDescription>{service.description}</S.ServiceDescription>
            <S.TagList>
              {service.tags.map((tag, idx) => (
                <S.Tag key={idx}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </S.ServiceCard>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default With;
