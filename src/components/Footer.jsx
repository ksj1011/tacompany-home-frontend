import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextField from './TextField';
import {talogoblack} from '../assets';

const S = {
  Wrapper: styled.footer`
    max-width: 1180px;
    margin: auto;
    padding: 50px 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Info: styled.div`
 
  `,
  Logo: styled.span`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.darkgray};
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  Text: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    span {
      display: block;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;
    }
    
  `,
  Menu: styled.ul`
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled.h4`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.secondary};
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled.a`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    display: inline-block;
    margin-bottom: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  Subscribe: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
    p {
      line-height: 1.5;
    }
  `,
  Form: styled.form`
    input {
      width: 60%;
    }
    margin-bottom: 1rem;
  `,
  Bottom: styled.div`
    width: 100%;
    color: ${props => props.theme.palette.gray};
    margin-top: 50px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.palette.lightgray};
    span {
      ${props => props.theme.typography.caption};
    }
  `,
};

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.Logo>
          <img src={talogoblack} width="133" alt="TAcompany" />
      </S.Logo>
      <S.Text>
        <span>티에이컴퍼니 대표: 김태식</span>
        <span>사업자등록번호: 750-23-01030</span>
        <span>전화 상담: 평일 09:30 ~ 18:30 (주말, 공휴일 휴무) +10 4584 4008</span>
        <span>주소: 인천광역시 부평구 부평대로 293, 부평테크시티 B103호</span>
        <span>메일 상담: nidnt91@gmail.com</span>
      </S.Text>
    </S.Info>
    <S.Bottom>
      <span>TA Company © 2021</span>
    </S.Bottom>
  </S.Wrapper>
);

export default Footer;
