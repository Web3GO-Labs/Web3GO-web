import styled from 'styled-components';
import CollectLink from './collect_link';

const HomeBanner = () => {
  return (
    <BannerStyled>
      <h1>The Web3.0 Projects Grow Out of Here</h1>
      <CollectLink />
      <div className="banner_bg_bg"></div>
    </BannerStyled>
  );
};
const BannerStyled = styled.div`
  position: relative;
  padding: 100px 20px 40px;
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
      font-size: 72px;
      line-height: 88px;
      margin: 0;
    }
  }
  .banner_bg_bg {
    position: relative;
    width: 65%;
    margin: 0 auto;
    background-image: url('/images/home/image_banner.webp');
    height: 400px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    ${({ theme }) => theme.mediaQueries.sm} {
      height: 690px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      width: 44%;
      margin: 0;
      height: 525px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      right: -4%;
    }
  }
`;
export default HomeBanner;
