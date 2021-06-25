import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';

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
  ButtonBox: styled.div`
    display: flex;
`,
};


const Contact = () => {
  return (
    <S.Wrapper id="contact">
      <S.Label>의뢰하기</S.Label>
      <S.Title>
        Call : 010 - 4584 - 4008 <br />
        Email : nidnt@naver.com
      </S.Title>
      <S.ButtonBox>
        <a href="http://pf.kakao.com/_KxjxixfK" target="_blank"><Button fill="solid" style={{marginRight:'10px'}} >카카오 문의하기</Button></a>
        <a href="https://forms.gle/gu5qVyekssrEseZp8" target="_blank"><Button>바로 문의하기</Button></a>
      </S.ButtonBox>
    </S.Wrapper>
  );
};

export default Contact;
