import { FC } from 'react';
import styled from 'styled-components';

const Education: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <EducationStyled id="Education">
      {!collapsed ? (
        <div className="bg">
          <img src="/images/home/education_bg01.webp" alt="banner" />
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
          <img src="/images/home/education_bg01.webp" alt="banner" />
        </div>
      ) : null}
    </EducationStyled>
  );
};
const EducationStyled = styled.div`
  padding-top: 120px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 200px;
  }
  .bg {
    max-width: 431px;
    width: 40%;
    min-width: 182px;
  }
  .bg_small {
    width: 65%;
    max-width: 382px;
    min-width: 182px;
    padding-top: 80px;
    margin: 0 auto;
  }
`;
export default Education;
