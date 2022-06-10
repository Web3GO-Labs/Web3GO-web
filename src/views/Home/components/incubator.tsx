import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
const listArr = [
  {
    logo: 'incubator_logo01.svg',
    title: 'Build Your First WEB3 Product',
    content: "Here, we'll help you brainstorm your first Web3.0 product.",
  },
  {
    logo: 'incubator_logo02.svg',
    title: 'Create Your Community',
    content:
      "Here, we'll help you to get connect to your very first users and build your project community from 0 to 1.",
  },
  {
    logo: 'incubator_logo03.svg',
    title: 'Get Early Stage Financing',
    content: "Here, we'll introduce Crypto Ventures and help you to get the early fundraising.",
  },
  {
    logo: 'incubator_logo04.svg',
    title: 'Promote Your Product',
    content: "Here, we'll work with you on making the whole market strategy.",
  },
];

const Incubator: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const [mouseIndex, setMouseIndex] = useState('0,3');
  const handleMouseOver = useCallback(
    (index: number) => {
      if (mouseIndex.indexOf(`${index}`) > -1) {
        return;
      } else {
        if (index === 0 || index === 3) {
          setMouseIndex('0,3');
        } else {
          setMouseIndex('1,2');
        }
      }
    },
    [mouseIndex],
  );

  return (
    <IncubatorStyled id="Incubator">
      <div className="text">
        <h2>Decentralized Startup Incubator</h2>
        <p>
          We will provide an online space for Web3 early-stage entrepreneurs to incubate projects from zero to one. You
          can discuss how to build your first Web3 product, how to build your community, how to get seed funding, and
          how to market your product.
        </p>
      </div>
      {collapsed ? (
        <UlSmallStyled>
          {listArr.map((v) => {
            return (
              <li key={v.title}>
                <div className="title">
                  <img src={`/images/home/${v.logo}`} alt={v.title} />
                  <h2>{v.title}</h2>
                </div>
                <p>{v.content}</p>
              </li>
            );
          })}
        </UlSmallStyled>
      ) : (
        <UlStyled className="animate animate__animated" data-animate="animate__show">
          {listArr.map((v, index) => {
            return (
              <li
                onMouseOver={() => handleMouseOver(index)}
                key={v.title}
                className={mouseIndex.indexOf(`${index}`) > -1 ? 'small' : 'big'}
              >
                <img src={`/images/home/${v.logo}`} alt={v.title} />
                <div className="ul_text">
                  <h2>{v.title}</h2>
                  <div className="p_wrap">
                    <p>{v.content}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </UlStyled>
      )}
    </IncubatorStyled>
  );
};
const UlSmallStyled = styled.ul`
  padding: 0 30px;

  li {
    border: 3px solid #000000;
    box-shadow: 4px 4px 0 0 #000000;
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;

    p {
      line-height: 20px;
      padding: 0 20px;
    }
    &:nth-child(1),
    &:nth-child(3) {
      background-color: #c4f7e5;
      p {
        padding: 35px 20px;
        background-color: #e6fff6;
      }
    }
    &:nth-child(2),
    &:nth-child(4) {
      background-color: #f3f1c4;
      p {
        padding: 25px 20px;
        background-color: #fffedf;
      }
    }
    .title {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 148px;
      img {
        width: 58px;
        margin: 0 4vw 0 4vw;
      }
      h2 {
        font-size: 22px;
        line-height: 28px;
      }
    }
  }
`;
const UlStyled = styled.ul`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &.animate__show {
    .big {
      max-width: 530px;
      width: 38%;
      .ul_text {
        width: 80%;
        h2 {
          width: 80%;
          margin-left: 10%;
          transition: all 0.3s ease;
        }
        .p_wrap {
          overflow: hidden;
          transition: all 0.3s ease;
          width: 0;
          opacity: 0;
        }
      }
    }
    .small {
      width: 60%;
      max-width: 880px;
      .ul_text {
        h2 {
          width: 40%;
          margin-left: 0;
        }
        .p_wrap {
          width: 16vw;
          opacity: 1;
        }
      }
    }
  }
  li {
    border: 3px solid #000000;
    box-shadow: 4px 4px 0 0 #000000;
    border-radius: 12px;
    padding: 46px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(1),
    &:nth-child(3) {
      ${({ theme }) => theme.mediaQueries.xxl} {
        margin-left: 0;
        padding-left: 0;
      }
      margin-left: -12px;
      padding-left: 12px;
    }
    &:nth-child(2),
    &:nth-child(4) {
      ${({ theme }) => theme.mediaQueries.xxl} {
        margin-right: 0;
        padding-right: 0;
      }
      margin-right: -14px;
      padding-right: 12px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 30px;
    }
    &:nth-child(1),
    &:nth-child(4) {
      background-color: #c4f7e5;
    }
    &:nth-child(2),
    &:nth-child(3) {
      background-color: #f3f1c4;
    }

    &.big {
      max-width: 880px;
      width: 60%;
      transition: all 0.3s ease;
      .ul_text {
        width: 80%;
        h2 {
          // transition: all 0.3s ease;
          width: 40%;
        }
      }
    }
    &.small {
      max-width: 530px;
      width: 38%;
      transition: all 1s ease;
      .ul_text {
        width: 80%;
        h2 {
          width: 80%;
          margin-left: 10%;
          transition: all 1s ease;
        }
        .p_wrap {
          overflow: hidden;
          transition: all 1s ease;
          width: 0;
          opacity: 0;
        }
      }
    }
    img {
      width: 80px;
      margin-left: 2.5vw;
      margin-right: 3vw;
      margin: 0 2.3vw 0 2vw;
    }
    .ul_text {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #e6fff6;
      text-align: center;
      height: 148px;
      h2 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        width: 16vw;
        line-height: 18px;
      }
    }
  }
`;
const IncubatorStyled = styled.div`
  background-color: #edfaef;
  border-bottom: 3px solid #000;
  padding: 110px 0 120px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 200px 0;
  }
  .text {
    padding: 0 14vw 60px;
    text-align: center;
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 0 20px 140px;
    }
    h2 {
      font-size: 36px;
      padding-bottom: 28px;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 60px;
      }
    }
    p {
      max-width: 710px;
      margin: 0 auto;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
export default Incubator;
