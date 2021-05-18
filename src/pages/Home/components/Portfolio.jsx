import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { worksImage01 } from '../../../assets';
import { Button } from '../../../components';
import { useScrollFadeIn } from '../../../hooks';
import YoutubePlay from '../../../components/YoutubePlay';

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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 4rem;
  `,
  // List: styled.ul`
  //   width: 100%;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   margin-bottom: 4rem;
  // `,
  // ListItem: styled.li`
  //   width: 380px;
  //   box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
  //   border-radius: 0.5rem;
  // `,
  List: styled.div`
    width: 100%;
    display: grid;
    grid-gap: 14px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 3rem;
  `,
  ListItem: styled.div`
    cursor: pointer;
  `,
  ItemImage: styled.div`
    width: 100%;
    height: auto;
    min-height: 200px;
    border-radius: 0.5rem;
    border: 1px solid #e3e3e3;
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
};

const WORKS_ITEMS = [
  {
    image: worksImage01,
    title: 'Volutpat odio',
    label: 'Dec 14th, 2019',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst.',
  },
  {
    image: worksImage01,
    title: 'Arcu ac tortor dignissim',
    label: 'Dec 14th, 2019',
    description:
      'Convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.',
  },
  {
    image: worksImage01,
    title: 'Eros donec ac odio',
    label: 'Dec 14th, 2019',
    description:
      'Tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur.',
  },{
    image: worksImage01,
    title: 'Eros donec ac odio2',
    label: 'Dec 14th, 2019',
    description:
      'Tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur.',
  },{
    image: worksImage01,
    title: 'Eros donec ac odio1',
    label: 'Dec 14th, 2019',
    description:
      'Tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur.',
  },
];

const WORKS_ITEMS2 = [
  {
    image: worksImage01,
    title: 'Volutpat odio',
    label: 'Dec 14th, 2019',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst.',
  }
];

const Portfolio = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.4),
  };

  const [toggle, setToggle] = useState(false);
  const [videoId, setVideoId] = useState('x9jIRRqijhY');

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&channelId=UCxZg5WfNu6zUGVkxUhoOJJw&key=AIzaSyCcJBMZ-0ObwfzrhEnvdWxLzOoXrAdUp10&order=date',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  const test = (id)=>{
    setVideoId(id);
    setToggle(true)
  }
  return (
    <S.Wrapper id="pho">
      <S.Label>포트폴리오</S.Label>
      <S.List>
        {videos.map((item, index) => (
          <S.ListItem key={item.title} >
            <S.ItemImage onClick={()=>test(item.id.videoId)} image={item.snippet.thumbnails.medium.url} />
          </S.ListItem>
        ))}
      </S.List>
      <a href="https://www.youtube.com/channel/UCxZg5WfNu6zUGVkxUhoOJJw" target="_blank">
        <Button fill="outline">더보기</Button>
      </a>
      {toggle && <YoutubePlay setToggle={setToggle} videoId={videoId} />}
    </S.Wrapper>
  );
};

export default Portfolio;
