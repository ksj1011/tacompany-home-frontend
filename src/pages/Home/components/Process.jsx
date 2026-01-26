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
  Timeline: styled.div`
    width: 100%;
    position: relative;
    padding: 2rem 0;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
      transform: translateX(-50%);

      @media (max-width: 992px){
        left: 30px;
      }
    }
  `,
  ProcessStep: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    position: relative;

    &:nth-child(odd) {
      flex-direction: row;

      @media (max-width: 992px){
        flex-direction: row;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: 992px){
        flex-direction: row;
      }
    }
  `,
  StepContent: styled.div`
    width: calc(50% - 3rem);
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 16px;
    padding: 2rem;
    border: 2px solid ${props => props.theme.palette.lightgray};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.3);
    }

    @media (max-width: 992px){
      width: calc(100% - 80px);
      margin-left: 80px;
    }
  `,
  StepNumber: styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.white};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.4);

    @media (max-width: 992px){
      left: 30px;
      transform: translateX(-50%);
    }
  `,
  StepTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  `,
  StepDescription: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    margin-bottom: 1rem;
    line-height: 1.7;
  `,
  StepDetails: styled.ul`
    list-style: none;
    padding: 0;
  `,
  StepDetail: styled.li`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    padding: 0.4rem 0;
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

const Process = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const step1Anim = useScrollFadeIn('left', 1, 0.3);
  const step2Anim = useScrollFadeIn('right', 1, 0.4);
  const step3Anim = useScrollFadeIn('left', 1, 0.5);
  const step4Anim = useScrollFadeIn('right', 1, 0.6);
  const step5Anim = useScrollFadeIn('left', 1, 0.7);

  const steps = [
    {
      title: '기획 및 컨설팅',
      description: '고객의 요구사항을 파악하고 최적의 콘텐츠 방향을 제시합니다.',
      details: ['목적 및 타겟 분석', '콘텐츠 컨셉 기획', '예산 및 일정 수립']
    },
    {
      title: '사전 제작',
      description: '체계적인 준비 과정으로 원활한 촬영을 준비합니다.',
      details: ['시나리오 작성', '촬영 장소 섭외', '출연진 및 스태프 구성']
    },
    {
      title: '촬영',
      description: '전문 장비와 숙련된 스태프로 고품질 영상을 촬영합니다.',
      details: ['멀티 카메라 촬영', '조명 및 음향 세팅', '실시간 모니터링']
    },
    {
      title: '후반 작업',
      description: '편집과 특수효과로 완성도 높은 영상을 제작합니다.',
      details: ['영상 편집', 'CG 및 자막 삽입', '사운드 디자인']
    },
    {
      title: '최종 납품',
      description: '고객이 원하는 형식으로 완성된 영상을 전달합니다.',
      details: ['품질 검수', '포맷 변환', '플랫폼별 최적화']
    }
  ];

  const stepAnims = [step1Anim, step2Anim, step3Anim, step4Anim, step5Anim];

  return (
    <S.Wrapper id="process">
      <S.Label {...titleAnim}>제작 프로세스</S.Label>
      <S.SubLabel {...subtitleAnim}>체계적인 프로세스로 완성도 높은 콘텐츠를 제작합니다</S.SubLabel>

      <S.Timeline>
        {steps.map((step, index) => (
          <S.ProcessStep key={index} {...stepAnims[index]}>
            <S.StepNumber>{index + 1}</S.StepNumber>
            <S.StepContent>
              <S.StepTitle>{step.title}</S.StepTitle>
              <S.StepDescription>{step.description}</S.StepDescription>
              <S.StepDetails>
                {step.details.map((detail, idx) => (
                  <S.StepDetail key={idx}>{detail}</S.StepDetail>
                ))}
              </S.StepDetails>
            </S.StepContent>
          </S.ProcessStep>
        ))}
      </S.Timeline>
    </S.Wrapper>
  );
};

export default Process;
