import React from 'react'
import * as S from './styles'

export interface ComponentProps {
  placeholder: string
  onChange: (value: any) => void
  value?: string
}

const Input = (props: ComponentProps) => {
  return <S.Input {...props} />
}

export default Input
