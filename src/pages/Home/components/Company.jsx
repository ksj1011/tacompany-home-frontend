import React ,{useState,useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { useScrollClipPath } from '../../../hooks';
import { ceo } from '../../../assets';
const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    margin-top: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 992px){
        margin-top: 450px;
    }
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
    padding: 0 10px;
    
    @media (max-width: 992px){
        padding: 0 10px;
    }
  `,
  Text: styled.p`
    span {
      display: block;
      margin-bottom: 3rem;
    }
    font-size:1.4rem;
    font-weight: 500;

    @media (max-width: 992px){
        span {
            display: block;
            margin-bottom: 1.5rem;
        }
        font-size: 1rem;
        font-weight: 400;
    }
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
    width: 375px;
    height: 550px;
    margin-right: 20px;
    background: no-repeat center/cover url(${ceo});

    @media (max-width: 992px){
        height:300px;
        margin-right:10px;
    }
`,
};

const SERVICES_ITEMS = [
  {
    title: 'Volutpat odio',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
    button: 'Get started',
  },
  {
    title: 'Diam donec',
    description:
      'Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.',
    button: 'Switch over',
  },
  {
    title: 'Elit at imperdiet',
    description:
      'Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.',
    button: 'Read more',
  },
];

const Company = () => {

    const animatedImage = useScrollClipPath();
    const animated = useScrollFadeIn('left', 2, 0);

    const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
      console.log(window.pageYOffset);
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
  return (
    <S.Wrapper id="home">
      <S.Label>회사소개</S.Label>
      <S.Box>
        <S.TextWrapper>
            <S.Text {...animated}>
                <span>안녕하세요 티에이 컴퍼니 김태식입니다</span>
                <span>티에이컴퍼니는 ‘상상 그 이상’ 이라는 모토를 가지고 회사를 설립하였습니다</span>
                <span>다가오는 뉴노멀 시대에 맞추어 그동안 혁신적이지 않고 동일하기만 하였던 영상업에 대해 한걸음더 혁신적인 영상을 만들기 위하여 회사를 설립하였습니다</span>
                <span>저희 TA컴퍼니는 일반적인 광고 영상이 아닌 좀더 창의적이며 스토리가있는 영상과 광고를 만들것이며 이는 고객님들께 최선과 열심이 아닌 ‘최고의 영상’으로 여러분들께 보여 드릴것을 약속드립니다</span>
            </S.Text>
        </S.TextWrapper>
        <S.Image {...animatedImage} />
      </S.Box>
    </S.Wrapper>
  );
};

export default Company;
