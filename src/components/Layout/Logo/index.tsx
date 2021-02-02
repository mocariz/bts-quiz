import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  display: block;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 40px !important;
  }
`
const Logo = () => (
  <Wrapper>
    <NextLink href="/">
      <Image src="/img/logo.png" alt="logo" width="135" height="60" />
    </NextLink>
  </Wrapper>
)

export default Logo
