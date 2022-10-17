import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
0% {
  -webkit-transform: translateX(0);
  transform: translateX(0)
}
to {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%)
}
`;
const ScrollBannerStyle = styled.div`
  display: inline-block;
  width: calc(31vw * 4 + 4vw * 2 * 4);
  max-width: calc(590px * 4 + 4vw * 2 * 4);
  min-width: calc(270px * 4 + 4vw * 2 * 4);
  animation: ${marquee} 10s linear infinite;
  background-color: #fff;
  img {
    display: inline-block;
    width: 31vw;
    max-width: 590px;
    min-width: 270px;
    margin: 0 4vw;
  }
`;
const ScrollBannerStyledInner = styled.div`
  width: calc(31vw * 4 + 4vw * 2 * 4 + 31vw * 4 + 4vw * 2 * 4);
  max-width: calc(590px * 4 + 4vw * 2 * 4 + 590px * 4 + 4vw * 2 * 4);
  min-width: calc(270px * 4 + 4vw * 2 * 4 + 270px * 4 + 4vw * 2 * 4);
  padding: 24px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px 0;
  }
`;
const ScrollBannerStyledWrap = styled.div`
  max-width: 100vw;
  overflow: hidden;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
  box-shadow: 0 4px 0 0 #000000;
  background-color: #fff;
`;
const ScrollBanner = () => {
  return (
    <ScrollBannerStyledWrap>
      <ScrollBannerStyledInner>
        <ScrollBannerStyle>
          <img src="/images/home/scroll_banner_01.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_02.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_01.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_02.svg" alt="web3go" />
        </ScrollBannerStyle>
        <ScrollBannerStyle>
          <img src="/images/home/scroll_banner_01.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_02.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_01.svg" alt="web3go" />
          <img src="/images/home/scroll_banner_02.svg" alt="web3go" />
        </ScrollBannerStyle>
      </ScrollBannerStyledInner>
    </ScrollBannerStyledWrap>
  );
};

export default ScrollBanner;
