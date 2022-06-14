import { useEffect, useMemo, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import CollectLink from './collect_link';
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
const HomeBanner = () => {
  return (
    <BannerStyled>
      <h1>The Web3.0 Projects Grow Out of Here</h1>
      <CollectLink />
      <div className="banner_bg_bg">
        <BG />
      </div>
    </BannerStyled>
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
      path: '/media/banner_bg.json',
    });

    return () => animation.destroy();
  }, []);
  return useMemo(() => {
    return (
      <>
        <div ref={ref}></div>
        {ref ? (
          <div className="bg_image">
            <img className="one" src="/images/home/Banner_01.svg" alt="home" />
            <img className="two" src="/images/home/Banner_02.svg" alt="home" />
            <img className="three" src="/images/home/Banner_03.svg" alt="home" />
          </div>
        ) : null}
      </>
    );
  }, []);
};
const BannerStyled = styled.div`
  position: relative;
  padding: 100px 20px 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth}px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
    padding: 180px 20px 309px;
  }
  h1 {
    font-size: 44px;
    line-height: 52px;
    margin: 0 auto;
    ${({ theme }) => theme.mediaQueries.md} {
      width: 50%;
      font-size: 62px;
      line-height: 70px;
      margin: 0;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      font-size: 72px;
      line-height: 88px;
    }
  }
  .banner_bg_bg {
    position: relative;
    margin-top: -18%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 500px;
    // min-width: 500px;

    ${({ theme }) => theme.mediaQueries.md} {
      position: absolute;
      top: -8%;
      right: -26%;
      left: auto;
      transform: none;
      width: 100%;
      margin-top: 0;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      top: -14%;
      right: -30%;
    }
    .bg_image {
      position: absolute;
      top: 26%;
      left: 20%;
      width: 60%;
      height: 50%;
      img {
        position: absolute;
        z-index: 9;
        &.one {
          width: 33%;
          top: 0;
          left: 30%;
          animation: ${floatingAnim('0', '10px')} 2s linear infinite;
        }
        &.two {
          width: 43%;
          top: 26%;
          left: 10%;
          animation: ${floatingAnim('0', '20px')} 3s linear infinite;
        }
        &.three {
          width: 25%;
          top: 20%;
          right: 14%;
          animation: ${floatingAnim('0', '-14px')} 2s linear infinite;
        }
      }
    }
  }
`;
export default HomeBanner;
