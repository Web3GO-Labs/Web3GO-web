import styled from 'styled-components';

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
        <img src="/images/home/community_bg01.webp" alt="banner" />
      </div>
    </CommunityStyled>
  );
};
const CommunityStyled = styled.div`
  padding-top: 100px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 83px;
    padding-top: 240px;
  }
  .bg {
    width: 65%;
    max-width: 382px;
    min-width: 182px;
    margin: 0 auto;
    padding-top: 80px;
    ${({ theme }) => theme.mediaQueries.md} {
      width: 40%;
      padding-top: 0;
      margin: 0;
    }
  }
`;
export default Community;
