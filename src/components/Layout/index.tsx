import React from 'react'
import Head from 'next/head'

import Logo from './Logo'
import Footer from './Footer'
import GitHubCorner from '../GitHubCorner'

import * as S from './styles'

export interface ComponentProps {
  backgroundImage: string
  mobileBackgroundImage?: string
  children: any
}

const Container = (props: ComponentProps) => {
  return (
    <S.Wrapper
      backgroundImage={props.backgroundImage}
      mobileBackgroundImage={props.mobileBackgroundImage}
    >
      <Head>
        <title>BTS Quiz</title>
      </Head>
      <S.Container>
        <Logo />
        <div className="content">
          {props.children}
          <Footer />
        </div>
      </S.Container>

      <GitHubCorner />
    </S.Wrapper>
  )
}

export default Container
