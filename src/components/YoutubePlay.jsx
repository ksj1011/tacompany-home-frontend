import React from 'react';
import styled from 'styled-components';


const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba( 0, 0, 0, 0.5);
    
    justify-content: center;
    align-items: center;
     
  `,

  Content: styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 640px;
    background-color: #FFF;
  `,
};

const YoutubePlay = ({videoId, setToggle}) => {
  return(
    <S.Wrapper onClick={()=>setToggle(false)}>
      <S.Content>
        <iframe id="player" type="text/html" width="640" height="360"
                src={`http://www.youtube.com/embed/${videoId}`}
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </S.Content>
    </S.Wrapper>
  )
}

export default YoutubePlay;
