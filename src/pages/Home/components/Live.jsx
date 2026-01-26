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
  SystemFlow: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  `,
  FlowRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 992px){
      flex-direction: column;
    }
  `,
  SystemCard: styled.div`
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 16px;
    padding: 2rem;
    flex: 1;
    border: 2px solid ${props => props.theme.palette.lightgray};
    transition: all 0.3s ease;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: scale(1.05);
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.3);
    }
  `,
  Arrow: styled.div`
    font-size: 2rem;
    color: ${props => props.theme.palette.primary};

    @media (max-width: 992px){
      transform: rotate(90deg);
    }
  `,
  SystemIcon: styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  SystemTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  `,
  SystemDesc: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    font-size: 0.95rem;
  `,
  FeatureGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    width: 100%;
    margin-top: 3rem;

    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  `,
  FeatureCard: styled.div`
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
    }
  `,
  FeatureTitle: styled.h4`
    ${props => props.theme.typography.subheading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  FeatureIcon: styled.span`
    font-size: 1.5rem;
  `,
  FeatureList: styled.ul`
    list-style: none;
    padding: 0;
  `,
  FeatureItem: styled.li`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.palette.primary};
      font-weight: bold;
    }
  `,
};

const Live = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const flowAnim = useScrollFadeIn('up', 1, 0.4);
  const feature1Anim = useScrollFadeIn('up', 1, 0.6);
  const feature2Anim = useScrollFadeIn('up', 1, 0.7);
  const feature3Anim = useScrollFadeIn('up', 1, 0.8);
  const feature4Anim = useScrollFadeIn('up', 1, 0.9);

  const systemFlow = [
    { icon: '🎥', title: '촬영', desc: '멀티 카메라 시스템' },
    { icon: '🎛️', title: '믹싱', desc: '실시간 영상/음향 믹싱' },
    { icon: '📡', title: '송출', desc: '다중 플랫폼 동시 송출' },
    { icon: '📺', title: '송출완료', desc: 'YouTube, 네이버 등' }
  ];

  const features = [
    {
      icon: '🎬',
      title: '멀티 카메라 시스템',
      items: ['4K 카메라 다중 구성', '다양한 앵글 전환', '전문 카메라 워크']
    },
    {
      icon: '🎚️',
      title: '실시간 편집',
      items: ['즉각적인 화면 전환', '자막 및 그래픽 삽입', 'PIP 화면 구성']
    },
    {
      icon: '📡',
      title: '안정적 송출',
      items: ['고속 인터넷 연결', '백업 송출 시스템', '24시간 기술 지원']
    },
    {
      icon: '🎯',
      title: '다중 플랫폼',
      items: ['YouTube Live', '네이버 NOW', '기타 플랫폼 동시 송출']
    }
  ];

  const featureAnims = [feature1Anim, feature2Anim, feature3Anim, feature4Anim];

  return (
    <S.Wrapper id="live">
      <S.Label {...titleAnim}>라이브 중계방송 시스템</S.Label>
      <S.SubLabel {...subtitleAnim}>전문 장비와 시스템으로 안정적인 실시간 방송을 제공합니다</S.SubLabel>

      <S.SystemFlow {...flowAnim}>
        <S.FlowRow>
          {systemFlow.map((system, index) => (
            <React.Fragment key={index}>
              <S.SystemCard>
                <S.SystemIcon>{system.icon}</S.SystemIcon>
                <S.SystemTitle>{system.title}</S.SystemTitle>
                <S.SystemDesc>{system.desc}</S.SystemDesc>
              </S.SystemCard>
              {index < systemFlow.length - 1 && <S.Arrow>→</S.Arrow>}
            </React.Fragment>
          ))}
        </S.FlowRow>
      </S.SystemFlow>

      <S.FeatureGrid>
        {features.map((feature, index) => (
          <S.FeatureCard key={index} {...featureAnims[index]}>
            <S.FeatureTitle>
              <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
              {feature.title}
            </S.FeatureTitle>
            <S.FeatureList>
              {feature.items.map((item, idx) => (
                <S.FeatureItem key={idx}>{item}</S.FeatureItem>
              ))}
            </S.FeatureList>
          </S.FeatureCard>
        ))}
      </S.FeatureGrid>
    </S.Wrapper>
  );
};

export default Live;
