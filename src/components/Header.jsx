import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { talogo } from '../assets';
import {Link} from 'react-scroll';

//background-color: ${({ isScroll, theme }) => isScroll ? theme.palette.white : 'black'};
const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: -1px;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: black;
    box-shadow: none
 `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: ${props => (props.isScroll ? '70px' : '100px')};
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    color: white;
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;
  `,
  Navigation: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  NavigationItem: styled(Link)`
    color: white;
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = [
    {
        link: 'home',
        name: '회사소개'
    },
    {
        link: 'process',
        name: '제작프로세스'
    },
    {
        link: 'pho',
        name: '포트폴리오'
    },
    {
        link: 'youtube',
        name: '유튜버교육'
    },
    {
        link: 'home',
        name: '직원소개'
    },
    {
        link: 'contact',
        name: '의뢰하기'
    },
]
//const NAVIGATION_ITEMS = ['회사소개', '포트폴리오', '유튜버교육', '직원소개', '의뢰하기'];

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);      
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);

  const clickTest = () =>{
    setIsScroll(true);  
  }

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>
            <img src={talogo} width="133" alt="TAcompany" />
        </S.Logo>
        <S.Navigation>
          {NAVIGATION_ITEMS.map(item => (
            <S.NavigationItem key={item} isScroll={isScroll} to={item.link} spy={true} smooth={true} onClick={clickTest} > 
              {item.name}
            </S.NavigationItem>
          ))}
        </S.Navigation>
        {/* <S.ButtonWrapper>
          <Button fill="solid" type="button" style={{ marginLeft: 'auto' }}>
            Get a Quote
          </Button>
        </S.ButtonWrapper> */}
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
