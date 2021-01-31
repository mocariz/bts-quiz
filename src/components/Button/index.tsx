import React from 'react'
import * as S from './styles'

export interface ComponentProps {
  disabled?: boolean
  text: string
  type: string
}

const Button = (props: ComponentProps) => {
  return (
    <S.Button type={props.type} disabled={props.disabled}>
      {props.text}
    </S.Button>
  )
}

export default Button
