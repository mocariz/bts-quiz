import styled from 'styled-components'
import Image from 'next/image'

const FooterWrapper = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }

    &:first-child {
      margin-right: 20px;
    }
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <Image
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
          width={90}
          height={60}
        />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Footer
