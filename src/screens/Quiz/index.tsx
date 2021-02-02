import React, { useEffect, useState } from 'react'

import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import QuestionWidget from '../../components/QuestionWidget'
import ResultWidget from '../../components/ResultWidget'

export interface ComponentProps {
  externalQuestions: any
  externalBg: string
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

const Page = ({ externalQuestions, externalBg }: ComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [results, setResults] = useState([])
  const questionIndex = currentQuestion
  const totalQuestions = externalQuestions.length
  const question = externalQuestions[questionIndex]

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000)
    // nasce === didMount
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
    <Layout backgroundImage={externalBg} mobileBackgroundImage={externalBg}>
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
        <ResultWidget title="Tela de Resultado:" results={results} />
      )}
    </Layout>
  )
}

export default Page
