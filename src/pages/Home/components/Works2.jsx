import React from 'react';
import styled from 'styled-components';
import { worksImage01 } from '../../../assets';
import { Button } from '../../../components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: black;
    margin-bottom: 3rem;
    font-size: 2rem;

    @media (max-width: 992px){
        font-size: 1.2rem;
    }
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 992px){
        font-size: 1.5rem;
    }
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 4rem;
  `,
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
  `,
  ListItem: styled.li`
    width: 380px;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemImage: styled.div`
    width: 100%;
    height: 380px;
    border-radius: 0.5rem 0.5rem 0 0;
    background: no-repeat center/cover url(${props => props.image});
  `,
  TextContainer: styled.div`
    padding: 2rem;
  `,
  ItemTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.black};
    margin-bottom: 0.75rem;
  `,
  ItemLabel: styled.p`
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.gray};
    font-weight: 400;
    margin-bottom: 1.5rem;
  `,
  ItemDesciption: styled.p`
    ${props => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  TextButton: styled.button`
    width: fit-content;
    padding: 0;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
  ButtonBox: styled.div`
    display: flex;
`,
};


const Works = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
  };

  return (
    <S.Wrapper id="contact">
      <S.Label>의뢰하기</S.Label>
      <S.Title>
        Call : 010 - 4584 - 4008 <br />
        Email : nidnt91@gmail.com
      </S.Title>
      <S.ButtonBox>
        <a href="http://pf.kakao.com/_KxjxixfK" target="_blank"><Button fill="solid" style={{marginRight:'10px'}} >카카오 문의하기</Button></a>
        <a href="https://forms.gle/gu5qVyekssrEseZp8" target="_blank"><Button>바로 문의하기</Button></a>
      </S.ButtonBox>
    </S.Wrapper>
  );
};

export default Works;
