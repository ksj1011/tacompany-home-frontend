import React from 'react';
import styled from 'styled-components';
import { heroBackground } from '../../../assets';
import { Button } from '../../../components';

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url(${heroBackground});

    @media (max-width: 992px){
        height: 600px;
    }
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.p`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    padding-left: 5px;

    @media (max-width: 992px){
        font-size: 1.5rem;
    }
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    font-size: 6rem;
    font-weight: 500;
    padding-left: 5px;

    @media (max-width: 992px){
        font-size: 4rem;
    }
  `,
};

const MainBanner = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>
          상상 그 이상의 영상
        </S.Title>
        <S.Description>
          TA Company
        </S.Description>
      </S.Wrapper>
    </S.Background>
  );
};

export default MainBanner;
