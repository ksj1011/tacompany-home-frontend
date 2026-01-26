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
  ContentWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
  MainCard: styled.div`
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 20px;
    padding: 3rem;
    border: 2px solid ${props => props.theme.palette.primary};
    box-shadow: 0 8px 24px rgba(74, 158, 255, 0.2);
  `,
  MainTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
  `,
  MainDescription: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.8;
  `,
  CurriculumGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  `,
  CurriculumCard: styled.div`
    background: ${props => props.theme.palette.background};
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(74, 158, 255, 0.2);
    }
  `,
  CardHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `,
  CardIcon: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  `,
  CardTitle: styled.h4`
    ${props => props.theme.typography.subheading};
    color: ${props => props.theme.palette.textPrimary};
    font-size: 1.3rem;
  `,
  CardContent: styled.ul`
    list-style: none;
    padding: 0;
  `,
  CardItem: styled.li`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textSecondary};
    padding: 0.6rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.palette.primary};
      font-weight: bold;
      font-size: 1.2rem;
    }
  `,
  BenefitSection: styled.div`
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}15, ${props => props.theme.palette.secondary}15);
    border-radius: 16px;
    padding: 2.5rem;
    margin-top: 2rem;
  `,
  BenefitTitle: styled.h4`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
  `,
  BenefitGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  `,
  BenefitItem: styled.div`
    text-align: center;
    padding: 1rem;
  `,
  BenefitIcon: styled.div`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  `,
  BenefitText: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textPrimary};
    font-weight: 600;
  `,
};

const Education = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);

  const curriculum = [
    {
      icon: '📹',
      title: '기초 영상 제작',
      items: [
        '카메라 세팅 및 구도 설정',
        '조명 활용 및 음향 녹음',
        '기본 촬영 기법 습득'
      ]
    },
    {
      icon: '✂️',
      title: '영상 편집',
      items: [
        '프리미어 프로 기초',
        '컷 편집 및 자막 삽입',
        '효과음 및 배경음악 활용'
      ]
    },
    {
      icon: '🎨',
      title: '콘텐츠 기획',
      items: [
        '주제 선정 및 타겟 분석',
        '스토리보드 작성',
        '트렌드 분석 및 활용'
      ]
    },
    {
      icon: '📊',
      title: '채널 운영 전략',
      items: [
        '썸네일 제작 기법',
        'SEO 최적화 방법',
        '구독자 관리 및 소통'
      ]
    }
  ];

  const benefits = [
    { icon: '👨‍🏫', text: '1:1 맞춤 교육' },
    { icon: '🎥', text: '실습 중심 커리큘럼' },
    { icon: '📺', text: '스튜디오 무료 이용' },
    { icon: '💡', text: '콘텐츠 기획 컨설팅' },
    { icon: '🛠️', text: '장비 사용법 교육' },
    { icon: '🎯', text: '취업 및 창업 지원' }
  ];

  const mainCardAnim = useScrollFadeIn('up', 1, 0.4);

  return (
    <S.Wrapper id="youtube">
      <S.Label {...titleAnim}>유튜버 교육</S.Label>
      <S.SubLabel {...subtitleAnim}>초보자부터 전문가까지, 체계적인 커리큘럼으로 성공적인 유튜버로 성장하세요</S.SubLabel>

      <S.ContentWrapper>
        <S.MainCard {...mainCardAnim}>
          <S.MainTitle>실전 중심의 유튜버 양성 프로그램</S.MainTitle>
          <S.MainDescription>
            영상 제작 기초부터 채널 운영 전략까지, 성공적인 유튜버가 되기 위한 모든 것을 배웁니다.
            현직 크리에이터의 실무 노하우와 최신 트렌드를 반영한 교육으로 여러분의 성장을 돕습니다.
          </S.MainDescription>

          <S.CurriculumGrid>
            {curriculum.map((course, index) => (
              <S.CurriculumCard key={index}>
                <S.CardHeader>
                  <S.CardIcon>{course.icon}</S.CardIcon>
                  <S.CardTitle>{course.title}</S.CardTitle>
                </S.CardHeader>
                <S.CardContent>
                  {course.items.map((item, idx) => (
                    <S.CardItem key={idx}>{item}</S.CardItem>
                  ))}
                </S.CardContent>
              </S.CurriculumCard>
            ))}
          </S.CurriculumGrid>

          <S.BenefitSection>
            <S.BenefitTitle>교육 수강 혜택</S.BenefitTitle>
            <S.BenefitGrid>
              {benefits.map((benefit, index) => (
                <S.BenefitItem key={index}>
                  <S.BenefitIcon>{benefit.icon}</S.BenefitIcon>
                  <S.BenefitText>{benefit.text}</S.BenefitText>
                </S.BenefitItem>
              ))}
            </S.BenefitGrid>
          </S.BenefitSection>
        </S.MainCard>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Education;
