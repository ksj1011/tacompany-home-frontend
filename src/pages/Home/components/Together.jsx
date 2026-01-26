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
  CategoryGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    margin-bottom: 3rem;

    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  `,
  CategoryCard: styled.div`
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 16px;
    padding: 2.5rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.2);
    }
  `,
  CategoryHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.palette.lightgray};
  `,
  CategoryIcon: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  `,
  CategoryTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    font-size: 1.5rem;
  `,
  PartnerList: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `,
  PartnerItem: styled.div`
    background: ${props => props.theme.palette.background};
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid ${props => props.theme.palette.lightgray};
    transition: all 0.2s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: translateY(-2px);
    }
  `,
  PartnerName: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.textPrimary};
    font-weight: 500;
  `,
  StatsSection: styled.div`
    width: 100%;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}15, ${props => props.theme.palette.secondary}15);
    border-radius: 16px;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 992px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px){
      grid-template-columns: 1fr;
    }
  `,
  StatItem: styled.div`
    text-align: center;
  `,
  StatNumber: styled.div`
    ${props => props.theme.typography.title};
    color: ${props => props.theme.palette.primary};
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: 800;

    @media (max-width: 992px){
      font-size: 2.5rem;
    }
  `,
  StatLabel: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    font-weight: 600;
  `,
};

const Together = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const category1Anim = useScrollFadeIn('up', 1, 0.3);
  const category2Anim = useScrollFadeIn('up', 1, 0.4);
  const category3Anim = useScrollFadeIn('up', 1, 0.5);
  const category4Anim = useScrollFadeIn('up', 1, 0.6);
  const statsAnim = useScrollFadeIn('up', 1, 0.8);

  const categories = [
    {
      icon: '📺',
      title: '방송사 / 미디어',
      partners: ['KBS', 'MBC', 'SBS', '채널A', 'JTBC', 'tvN', '네이버', '카카오']
    },
    {
      icon: '🏫',
      title: '교육 기관',
      partners: ['서울대학교', '연세대학교', '고려대학교', '한양대학교', '성균관대학교', '중앙대학교', '경희대학교', '외국어대학교']
    },
    {
      icon: '🏢',
      title: '기업 / 스타트업',
      partners: ['삼성전자', 'LG전자', '현대자동차', '네이버', '카카오', '쿠팡', '배달의민족', '토스']
    },
    {
      icon: '🏛️',
      title: '공공 / 정부기관',
      partners: ['서울시청', '문화체육관광부', '교육부', '산업통상자원부', '중소벤처기업부', '고용노동부', '국세청', '특허청']
    }
  ];

  const stats = [
    { number: '500+', label: '프로젝트 완료' },
    { number: '200+', label: '파트너사' },
    { number: '10년+', label: '업계 경험' },
    { number: '98%', label: '고객 만족도' }
  ];

  const categoryAnims = [category1Anim, category2Anim, category3Anim, category4Anim];

  return (
    <S.Wrapper id="together">
      <S.Label {...titleAnim}>함께한 업체</S.Label>
      <S.SubLabel {...subtitleAnim}>다양한 분야의 파트너사와 함께 성공적인 프로젝트를 진행했습니다</S.SubLabel>

      <S.CategoryGrid>
        {categories.map((category, index) => (
          <S.CategoryCard key={index} {...categoryAnims[index]}>
            <S.CategoryHeader>
              <S.CategoryIcon>{category.icon}</S.CategoryIcon>
              <S.CategoryTitle>{category.title}</S.CategoryTitle>
            </S.CategoryHeader>
            <S.PartnerList>
              {category.partners.map((partner, idx) => (
                <S.PartnerItem key={idx}>
                  <S.PartnerName>{partner}</S.PartnerName>
                </S.PartnerItem>
              ))}
            </S.PartnerList>
          </S.CategoryCard>
        ))}
      </S.CategoryGrid>

      <S.StatsSection {...statsAnim}>
        {stats.map((stat, index) => (
          <S.StatItem key={index}>
            <S.StatNumber>{stat.number}</S.StatNumber>
            <S.StatLabel>{stat.label}</S.StatLabel>
          </S.StatItem>
        ))}
      </S.StatsSection>
    </S.Wrapper>
  );
};

export default Together;
