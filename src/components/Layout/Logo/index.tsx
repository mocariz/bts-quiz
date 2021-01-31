import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Logo = () => (
  <Image src="/img/logo.png" alt="logo" width="135" height="60" />
)

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

export default QuizLogo
