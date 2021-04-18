import React from 'react';
import styled from 'styled-components';

import { Button, TextField } from '../../../components';
import { ceo } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div`
    width: 322px;
    height: 500px;
    background: no-repeat center/cover url(${ceo});
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const Contact = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Image image={ceo} />
      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Contact us</S.Label>
        <S.Title {...animatedItem[1]}>
        안녕하세요 티에이 컴퍼니 김태식입니다 <br />
        티에이컴퍼니는 ‘상상 그 이상’ 이라는 모토를 가지고 회사를 설립하였습니다 <br />
        다가오는 뉴노멀 시대에 맞추어 그동안 혁신적이지 않고 동일하기만 하였던 영상업에 대해  <br />
        한걸음더 혁신적인 영상을 만들기 위하여 회사를 설립하였습니다 <br />
        저희 TA컴퍼니는 일반적인 광고 영상이 아닌 좀더 창의적이며 스토리가있는  <br />
        영상과 광고를 만들것이며 이는 고객님들께 최선과 열심이 아닌 <br />
        ‘최고의 영상’으로 여러분들께 보여 드릴것을 약속드립니다
        </S.Title>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Contact;
