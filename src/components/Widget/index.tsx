import React from 'react'
import * as S from './styled'
import { motion } from 'framer-motion'

export interface ComponentProps {
  title?: string
  children: any
  noPadding?: boolean
}

const Component = (props: ComponentProps) => {
  return (
    <S.Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' }
      }}
      initial="hidden"
      animate="show"
    >
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
