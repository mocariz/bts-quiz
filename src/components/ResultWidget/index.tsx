import React from 'react'
import Widget from '../Widget'

export interface ComponentProps {
  title: string
  results: Array<boolean>
}

const ResultWidget = ({ title, results }: ComponentProps) => {
  return (
    <Widget title={title}>
      <p>Você acertou {results.filter((x) => x).length} perguntas</p>
      <ul>
        {results.map((result, index) => (
          <li key={`result__${index}`}>
            #{index + 1} Resultado:
            {result === true ? 'Acertou' : 'Errou'}
          </li>
        ))}
      </ul>
    </Widget>
  )
}

export default ResultWidget
