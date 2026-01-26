import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';
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
  ContentCard: styled.div`
    width: 100%;
    background: ${props => props.theme.palette.cardBackground};
    border-radius: 24px;
    padding: 4rem 3rem;
    border: 2px solid ${props => props.theme.palette.lightgray};
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    }

    @media (max-width: 992px){
        padding: 3rem 2rem;
    }
  `,
  ContactGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
  `,
  ContactItem: styled.div`
    background: ${props => props.theme.palette.background};
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid ${props => props.theme.palette.lightgray};
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.palette.primary};
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(74, 158, 255, 0.2);
    }
  `,
  IconWrapper: styled.div`
    width: 60px;
    height: 60px;
    min-width: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  `,
  ContactInfo: styled.div`
    flex: 1;
  `,
  ContactLabel: styled.p`
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.textSecondary};
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  ContactValue: styled.p`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    font-size: 1.2rem;
    word-break: break-all;

    @media (max-width: 576px){
        font-size: 1rem;
    }
  `,
  ButtonBox: styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    a {
      flex: 1;
      min-width: 200px;
      max-width: 300px;

      @media (max-width: 576px){
        min-width: 100%;
      }
    }
  `,
  CTASection: styled.div`
    text-align: center;
    margin-bottom: 2rem;
  `,
  CTATitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.textPrimary};
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media (max-width: 992px){
        font-size: 1.4rem;
    }
  `,
  CTADescription: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.textSecondary};
    margin-bottom: 2rem;
  `,
  Divider: styled.div`
    width: 100%;
    height: 1px;
    background: ${props => props.theme.palette.lightgray};
    margin: 2rem 0;
  `,
};

const Contact = () => {
  const titleAnim = useScrollFadeIn('up', 1, 0);
  const subtitleAnim = useScrollFadeIn('up', 1, 0.2);
  const cardAnim = useScrollFadeIn('up', 1, 0.4);

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '010-4584-4008',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'nidnt@naver.com',
    },
  ];

  return (
    <S.Wrapper id="contact">
      <S.Label {...titleAnim}>의뢰하기</S.Label>
      <S.SubLabel {...subtitleAnim}>프로젝트에 대해 문의하시거나 견적을 요청하세요</S.SubLabel>

      <S.ContentCard {...cardAnim}>
        <S.CTASection>
          <S.CTATitle>프로젝트를 시작할 준비가 되셨나요?</S.CTATitle>
          <S.CTADescription>
            언제든지 편하게 연락주세요. 친절하게 상담해 드리겠습니다.
          </S.CTADescription>
        </S.CTASection>

        <S.ContactGrid>
          {contactInfo.map((item, index) => (
            <S.ContactItem key={index}>
              <S.IconWrapper>{item.icon}</S.IconWrapper>
              <S.ContactInfo>
                <S.ContactLabel>{item.label}</S.ContactLabel>
                <S.ContactValue>{item.value}</S.ContactValue>
              </S.ContactInfo>
            </S.ContactItem>
          ))}
        </S.ContactGrid>

        <S.Divider />

        <S.ButtonBox>
          <a href="http://pf.kakao.com/_KxjxixfK" target="_blank" rel="noopener noreferrer">
            <Button fill="solid">카카오 문의하기</Button>
          </a>
          <a href="https://forms.gle/gu5qVyekssrEseZp8" target="_blank" rel="noopener noreferrer">
            <Button>바로 문의하기</Button>
          </a>
        </S.ButtonBox>
      </S.ContentCard>
    </S.Wrapper>
  );
};

export default Contact;
