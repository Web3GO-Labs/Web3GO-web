import styled from 'styled-components';
import CollectLink from './collect_link';

const HomeFooter = () => {
  return (
    <HomeFooterStyled>
      <h2>Welcome</h2>
      <p>Welcome to Web3GO Labs, become one of us.</p>
      <p>As a long-termist and lifelong learner, join us in this new Web3 startup carnival.</p>
      <CollectLink />
    </HomeFooterStyled>
  );
};
const HomeFooterStyled = styled.div`
  padding-bottom: 136px;
  text-align: center;
  background-image: linear-gradient(180deg, #fffff1 0%, #e3fff1 100%);
  h2 {
    padding-top: 137px;
    padding-bottom: 28px;
    font-size: 36px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 60px;
    }
  }
  p {
    line-height: 20px;
    width: 80%;
    margin: 0 auto;
  }
`;

export default HomeFooter;
