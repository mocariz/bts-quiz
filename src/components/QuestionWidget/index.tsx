import React, { useState } from 'react'
import { Lottie } from '@crello/react-lottie'

import * as S from './styled'
import successAnimation from './animations/success.json'
import errorAnimation from './animations/error.json'

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
  addResult: (value: boolean) => void
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  addResult,
  onSubmit
}: ComponentProps) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const questionId = `question__${questionIndex}`
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setIsQuestionSubmited(true)
    setTimeout(() => {
      addResult(isCorrect)
      setIsQuestionSubmited(false)
      setSelectedAlternative(undefined)
      onSubmit()
    }, 3 * 500)
  }

  return (
    <Widget
      title={`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      noPadding
    >
      <img
        alt={`Question ${questionIndex + 1}`}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        src={question.image}
      />
      <S.Wrapper>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <S.Form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
            const isSelected = selectedAlternative === alternativeIndex

            return (
              <S.Option
                as="label"
                htmlFor={alternativeId}
                key={alternativeIndex}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                disabled={isQuestionSubmited}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  disabled={isQuestionSubmited}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </S.Option>
            )
          })}

          {!isQuestionSubmited && (
            <Button
              type="submit"
              text="Confirmar"
              disabled={!hasAlternativeSelected}
            />
          )}

          <S.IconBlock>
            {isQuestionSubmited && isCorrect && (
              <Lottie
                width="60px"
                height="60px"
                className="lottie-container basic"
                config={{
                  animationData: successAnimation,
                  loop: true,
                  autoplay: true
                }}
              />
            )}

            {isQuestionSubmited && !isCorrect && (
              <Lottie
                width="45px"
                height="45px"
                style={{ marginTop: '10px' }}
                className="lottie-container basic"
                config={{
                  animationData: errorAnimation,
                  loop: true,
                  autoplay: true
                }}
              />
            )}
          </S.IconBlock>
        </S.Form>
      </S.Wrapper>
    </Widget>
  )
}

export default QuestionWidget
