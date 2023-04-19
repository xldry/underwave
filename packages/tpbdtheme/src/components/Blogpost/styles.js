import styled from 'styled-components'
import { rem } from 'polished'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0;

  h2 {
    font-family: 'Bodoni Moda';
    font-size: ${rem(54)};
    text-decoration: none;
    color: black;
    text-align: center;
    line-height: 100%;
    margin-bottom: 15px;
  }

  h3 {
    font-size: ${rem(16)};
    font-family: monospace;
    font-weight: 400;
    color: #555;
    margin-bottom: 30px;
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  justify-content: center;

  .separator {
    width: 320px;
    height: 2px;
    background: rgb(255, 53, 48);
    margin: 20px auto 0 auto
  }

  & > p {
    margin: 0;
  }
`

export const AuthorAvatar = styled.div`
  background: black;
  border-radius: 50%;
  width: 56px;
  height: 56px;
`

export const PostDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    margin-bottom: 3px;
    font-weight: 300;
    font-size: 14px
  }

  span {
    margin: 0;
    font-weight: 300;
    font-size: 14px;
  }
`

export const SocialShare = styled.div`

`;

export const PostContent = styled.div`
  margin-top: 50px;
  font-family: 'Noto Serif', serif;
  font-weight: 400;
  font-size: 16px;

  div {
    p {
      line-height: 28px;
      margin-bottom: 20px;
      color: #1a1a1a;

      a {
        color: black;
        &:visited {
          color: black;
        }
      }
    }
  }
`