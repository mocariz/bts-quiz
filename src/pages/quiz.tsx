import React, { useEffect, useState } from 'react'

import db from '../../db.json'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import QuestionWidget from '../components/QuestionWidget'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const questionIndex = currentQuestion
  const totalQuestions = db.questions.length
  const question = db.questions[questionIndex]

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

  return (
    <Layout
      backgroundImage={db.bg}
      mobileBackgroundImage={db.bgMobile}
      title="BTS Quiz"
    >
      {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
        />
      )}

      {screenState === screenStates.LOADING && <Loading />}

      {screenState === screenStates.RESULT && (
        <div>Você acertou X questões, parabéns!</div>
      )}
    </Layout>
  )
}

export default Page
