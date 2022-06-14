import { useMatchBreakpoints } from '@my/ui';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Community from './components/community';
import Education from './components/education';
import HomeBanner from './components/home_banner';
import HomeFooter from './components/home_footer';
import HomeHeader from './components/home_header';
import Incubator from './components/incubator';
import ScrollBanner from './components/scroll_banner';

const Home: React.FC<{ className?: string }> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isXs, isSm, isMd } = useMatchBreakpoints();
  const doScroll = () => {
    const animates: NodeListOf<Element> = document.querySelectorAll('.animate');
    for (const dom of animates as any) {
      const top = dom.offsetTop;
      const scrollTop = window.scrollY;
      const innerHeight = window.innerHeight;
      if (scrollTop + innerHeight - innerHeight / 10 > top) {
        dom.className = dom.className.replace('animate', dom.dataset.animate);
      }
    }
  };
  useEffect(() => {
    doScroll();
    window.addEventListener('scroll', doScroll);
    return () => window.removeEventListener('scroll', doScroll);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if ([isXs, isSm, isMd].some(Boolean)) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isXs, isSm, isMd]);
  return (
    <HomeStyled>
      <div className="banner_bg">
        <HomeHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        <HomeBanner />
      </div>
      <ScrollBanner />
      <Incubator collapsed={collapsed} />
      <div className="two_bg">
        <Community />
        <Education collapsed={collapsed} />
      </div>
      <HomeFooter />
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  .banner_bg {
    background-image: linear-gradient(180deg, #dcffee 0%, #f3f0e4 100%);
  }
  .two_bg {
    // 100px
    // 240px
    padding: 0 0 100px;
    background-image: radial-gradient(circle at 50% 0%, #d9ffe1 0%, #fffffb 83%);
    border-bottom: 8px solid #000;
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 0 0 283px;
    }

    & > div {
      max-width: ${({ theme }) => theme.siteWidth}px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      flex-wrap: wrap;
      // ${({ theme }) => theme.mediaQueries.md} {
      //   padding-left: 0;
      //   padding-right: 0;
      // }
    }
    .text {
      width: 80%;
      ${({ theme }) => theme.mediaQueries.md} {
        width: 40%;
        min-width: 594px;
      }
      p {
        width: 100%;
        ${({ theme }) => theme.mediaQueries.md} {
          width: 72%;
        }
      }
    }
    h2 {
      margin-bottom: 40px;
      font-size: 36px;
      line-height: 40px;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 60px;
        line-height: 80px;
      }
    }
    p {
      font-size: 14px;
      line-height: 20px;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 14px;
      }
    }
  }
`;
export default Home;
