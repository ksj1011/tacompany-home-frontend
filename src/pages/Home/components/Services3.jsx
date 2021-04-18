import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { useScrollClipPath } from '../../../hooks';
import { test2 } from '../../../assets';
const S = {
  Wrapper: styled.section`
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
  `,
  Box: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
  `,
  Text: styled.p`
    span {
      display: block;
      margin-bottom: 3rem;
    }
    font-size:1.4rem;
    font-weight: 500;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${props => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${props => props.theme.palette.lightgray};
    span {
      color: ${props => props.theme.palette.secondary};
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
  width: 100%;
  height: 650px;
  background: no-repeat center/cover url(${test2});
`,
};

const Services2 = () => {

    const animatedImage = useScrollClipPath();
    const animated = useScrollFadeIn('left', 2, 0);
  return (
    <S.Wrapper id="youtube">
      <S.Label>유튜버교육</S.Label>
      <S.Box>
        <S.Image {...animatedImage} />
      </S.Box>
    </S.Wrapper>
  );
};

export default Services2;
