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

    @media (max-width: 992px){
        font-size: 1.2rem;
    }
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
  ImageBox: styled.div`
    position: relative;
    margin: 0 auto;
  `,
  Image: styled.img`
    width:100%;
    height:auto;
  `,
};

const Education = () => {
  const animatedImage = useScrollClipPath();

  return (
    <S.Wrapper id="youtube">
      <S.Label>유튜버교육</S.Label>
      <S.Box>
      <S.ImageBox {...animatedImage}>
            <S.Image src={test2} alt="제작프로세스" />
        </S.ImageBox>
      </S.Box>
    </S.Wrapper>
  );
};

export default Education;
