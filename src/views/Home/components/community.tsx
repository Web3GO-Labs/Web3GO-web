import { useEffect, useMemo, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import lottie from 'lottie-web';
const floatingAnim = (x: string, y: string) => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0px);
  }
`;
const Community = () => {
  return (
    <CommunityStyled id="Community">
      <div className="text">
        <h2>Decentralized Community</h2>
        <p>
          Here, You can share your entrepreneurial ideas, or the ideas you just brainstormed here. Or you can just build
          a team and start working!
        </p>
      </div>
      <div className="bg">
        <div className="bg_image">
          <img className="one" src="/images/home/Community_01.svg" alt="home" />
          <img className="two" src="/images/home/Community_02.svg" alt="home" />
        </div>
        <BG />
        {/* <img src="/images/home/community_bg01.webp" alt="banner" /> */}
      </div>
    </CommunityStyled>
  );
};
const BG = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg' as any,
      loop: true,
      autoplay: true,
      path: '/media/Community_bg.json',
    });

    return () => animation.destroy();
  }, []);
  return useMemo(() => {
    return <div ref={ref}></div>;
  }, []);
};
const CommunityStyled = styled.div`
  padding-top: 100px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 83px;
    padding-top: 340px;
  }
  .text {
    padding-bottom: 400px;
    ${({ theme }) => theme.mediaQueries.sm} {
      padding-bottom: 600px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      padding-bottom: 0;
    }
  }
  .bg {
    position: absolute;
    top: 33%;
    right: 0%;
    width: 80%;
    max-width: 800px;
    min-width: 182px;
    margin: 0 auto;
    padding-top: 80px;
    ${({ theme }) => theme.mediaQueries.sm} {
      top: 20%;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      top: 6%;
      right: -18%;
      width: 80%;
      padding-top: 0;
      margin: 0;
    }
    .bg_image {
      position: absolute;
      top: 38%;
      left: 22%;
      width: 24%;
      height: 24%;
      z-index: 9;
      ${({ theme }) => theme.mediaQueries.sm} {
        top: 31%;
        left: 19%;
      }
      ${({ theme }) => theme.mediaQueries.md} {
        left: 22%;
        top: 24%;
        width: 24%;
        height: 24%;
      }
      img {
        position: absolute;
        width: 100%;
        &:nth-child(1) {
          top: 0;
          left: 0;
          z-index: 9;
          animation: ${floatingAnim('3px', '15px')} 3s linear infinite;
        }
        &:nth-child(2) {
          top: 20%;
          left: 20%;
          animation: ${floatingAnim('3px', '10px')} 3s linear infinite;
        }
      }
    }
  }
`;
export default Community;
