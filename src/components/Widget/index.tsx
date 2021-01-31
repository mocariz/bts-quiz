import React from 'react'
import * as S from './styled'

export interface ComponentProps {
  title?: string
  children: any
  noPadding?: boolean
}

const Component = (props: ComponentProps) => {
  return (
    <S.Widget>
      {props.title ? (
        <S.Header>
          <h3>{props.title}</h3>
        </S.Header>
      ) : (
        ''
      )}
      <S.Content noPadding={props.noPadding}>{props.children}</S.Content>
    </S.Widget>
  )
}

export default Component
