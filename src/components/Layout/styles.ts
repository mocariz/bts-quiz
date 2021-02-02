import styled from 'styled-components'

export const Wrapper = styled.div<{
  backgroundImage: string
  mobileBackgroundImage?: string
}>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: bottom right;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: bottom right;
      background-image: linear-gradient(
          transparent 50%,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${(props) =>
          props.mobileBackgroundImage
            ? props.mobileBackgroundImage
            : props.backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-height: 100vh;
    overflow: hidden;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    max-width: 100%;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    .content {
      height: 90vh;
      overflow: auto;

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${({ theme }) => theme.colors.mainBg};
        border-radius: 10px;
      }

      &::-webkit-scrollbar {
        width: 5px;
        background-color: ${({ theme }) => theme.colors.mainBg};
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
      }
    }
  }
`
