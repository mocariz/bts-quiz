import React from 'react'
import * as S from './styled'

import Widget from '../Widget'
import Button from '../Button'

export interface ComponentProps {
  question: {
    image: string
    title: string
    description: string
    answer: number
    alternatives: Array<string>
  }
  questionIndex: number
  totalQuestions: number
  onSubmit: () => void
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit
}: ComponentProps) => {
  const questionId = `question__${questionIndex}`
  return (
    <Widget
      title={`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      noPadding
    >
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <S.Wrapper>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault()
            onSubmit()
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            return (
              <S.Option
                as="label"
                htmlFor={alternativeId}
                key={alternativeIndex}
              >
                <input id={alternativeId} name={questionId} type="radio" />
                {alternative}
              </S.Option>
            )
          })}

          <Button type="submit" text="Confirmar" />
        </form>
      </S.Wrapper>
    </Widget>
  )
}

export default QuestionWidget
