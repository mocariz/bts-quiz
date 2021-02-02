import React from 'react'

import QuizScreen from '../../screens/Quiz'
import db from '../../../db.json'

const Page = () => {
  return (
    <QuizScreen
      externalQuestions={db.questions}
      externalBg={db.bg}
      externalMobileBg={db.bg}
    />
  )
}

export default Page
