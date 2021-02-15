import React, { useEffect, useState } from 'react'

import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import QuestionWidget from '../../components/QuestionWidget'
import ResultWidget from '../../components/ResultWidget'

export interface ComponentProps {
  externalQuestions: Array<{
    image: string
    title: string
    description?: string
    answer: string | number
    alternatives: Array<string>
  }>
  externalBg: string
  externalMobileBg?: string
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

const Page = ({
  externalQuestions,
  externalBg,
  externalMobileBg
}: ComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [results, setResults] = useState([])
  const questionIndex = currentQuestion
  const totalQuestions = externalQuestions.length
  const question = externalQuestions[questionIndex]
  const mobileBackgroundImage = externalMobileBg ? externalMobileBg : externalBg

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 2 * 1000)
  }, [])

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  const addResult = (value: boolean) => {
    setResults([...results, value])
  }

  return (
    <Layout
      backgroundImage={externalBg}
      mobileBackgroundImage={mobileBackgroundImage}
    >
      {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          addResult={addResult}
          onSubmit={handleSubmitQuiz}
        />
      )}

      {screenState === screenStates.LOADING && <Loading />}

      {screenState === screenStates.RESULT && (
        <ResultWidget results={results} />
      )}
    </Layout>
  )
}

export default Page
