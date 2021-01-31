import React from 'react'
import Head from 'next/head'

import Logo from './Logo'
import Footer from './Footer'
import GitHubCorner from '../GitHubCorner'

import * as S from './styles'

export interface ComponentProps {
  title: string
  backgroundImage: string
  children: any
}

const Container = (props: ComponentProps) => {
  return (
    <S.Wrapper backgroundImage={props.backgroundImage}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <S.Container>
        <Logo />
        {props.children}
        <Footer />
      </S.Container>

      <GitHubCorner />
    </S.Wrapper>
  )
}

export default Container
