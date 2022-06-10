import TwitterIcon from 'components/svg/Twitter';
import DiscordIcon from 'components/svg/Discord';
import TelegramIcon from 'components/svg/Telegram';
import styled from 'styled-components';
const CollectLink = () => {
  return (
    <CollectLinkStyled>
      <li>
        <a href="/">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <DiscordIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <TelegramIcon />
        </a>
      </li>
    </CollectLinkStyled>
  );
};
const CollectLinkStyled = styled.ul`
  padding-top: 56px;
  clear: both;
  height: calc(56px + 10px + 48px + 3px * 2);
  padding-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    height: calc(56px + 10px + 60px + 3px * 2);
  }
  li {
    display: inline-block;
    vertical-align: middle;
    border: 3px solid ${({ theme }) => theme.colors.text};
    margin-right: 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    overflow: hidden;
    transform: scale(1);
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.1);
      border-radius: 20px;
    }
    &:nth-child(1) {
      path {
        transform: translateX(9px) translateY(10px);
        ${({ theme }) => theme.mediaQueries.md} {
          transform: translateX(14px) translateY(14px);
        }
      }
    }
    &:nth-child(2) {
      path {
        transform: translateX(6px) translateY(11px);
        ${({ theme }) => theme.mediaQueries.md} {
          transform: translateX(12px) translateY(16px);
        }
      }
    }
    &:nth-child(3) {
      path {
        transform: translateX(6px) translateY(10px);
        ${({ theme }) => theme.mediaQueries.md} {
          transform: translateX(12px) translateY(16px);
        }
      }
    }
    a {
      display: block;
      width: 48px;
      height: 48px;
      ${({ theme }) => theme.mediaQueries.md} {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
export default CollectLink;
