import { FC, useEffect, useMemo, useRef } from 'react';
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
const Education: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <EducationStyled id="Education">
      {!collapsed ? (
        <div className="bg">
          <div className="bg_image">
            <img className="one" src="/images/home/Education_01.webp" alt="home" />
            <img className="two" src="/images/home/Education_02.webp" alt="home" />
            <img className="three" src="/images/home/Education_03.webp" alt="home" />
          </div>
          <BG />
        </div>
      ) : null}
      <div className="text">
        <h2>Decentralized Education Center</h2>
        <p>
          We will provide all the useful knowledge/techniques/ideas you need to enter Web3, and we will also
          periodically conduct technical study groups to focus on learning a certain language/model.
        </p>
      </div>
      {collapsed ? (
        <div className="bg_small">
          <div className="bg_image">
            <img className="one" src="/images/home/Education_01.webp" alt="home" />
            <img className="two" src="/images/home/Education_02.webp" alt="home" />
            <img className="three" src="/images/home/Education_03.webp" alt="home" />
          </div>
          <BG />
          {/* <img src="/images/home/education_bg01.webp" alt="banner" /> */}
        </div>
      ) : null}
    </EducationStyled>
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
      path: '/media/Education_bg.json',
    });

    return () => animation.destroy();
  }, []);
  return useMemo(() => {
    return <div ref={ref}></div>;
  }, []);
};
const EducationStyled = styled.div`
  // padding-top: 120px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 460px;
  }
  .text {
    ${({ theme }) => theme.mediaQueries.md} {
      margin-left: 55%;
    }
  }
  .bg {
    // max-width: 431px;
    // width: 40%;
    // min-width: 182px;

    position: absolute;
    max-width: 900px;
    top: 10%;
    left: -26%;
    width: 90%;
    padding-top: 0;
    margin: 0;
  }
  .bg_small {
    width: 100%;
    max-width: 700px;
    min-width: 400px;
    // padding-top: 80px;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .bg_image {
    position: absolute;
    z-index: 9;
    top: 0;
    height: 100%;
    width: 50%;
    left: 20%;
    ${({ theme }) => theme.mediaQueries.md} {
      top: 0;
    }
    .one {
      margin-top: 92%;
      margin-left: 42%;
      animation: ${floatingAnim('-10px', '10px')} 3s linear infinite;
    }
    .two {
      margin-top: 8%;
      margin-left: 10%;
      animation: ${floatingAnim('10px', '0')} 3s linear infinite;
    }
    .three {
      margin-top: 8%;
      margin-left: 58%;
      animation: ${floatingAnim('-10px', '-10px')} 3s linear infinite;
    }
    img {
      display: block;
      height: 6%;
    }
  }
`;
export default Education;
