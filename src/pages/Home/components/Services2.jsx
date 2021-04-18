import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { useScrollClipPath } from '../../../hooks';
import { test1 } from '../../../assets';
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
  background: no-repeat center/cover url(${test1});
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

const Services2 = () => {

    const animatedImage = useScrollClipPath();
    const animated = useScrollFadeIn('left', 2, 0);
  return (
    <S.Wrapper id="process">
      <S.Label>제작프로세스</S.Label>
      <S.Box>
        <S.Image {...animatedImage} />
      </S.Box>
    </S.Wrapper>
  );
};

export default Services2;
