import React, { useState, useEffect } from 'react'
import Widget from '../Widget'
import API from '../../services/api'
import { useRouter } from 'next/router'
import { countBy, orderBy } from 'lodash'
import * as S from './styled'

import { TrophyFill } from '@styled-icons/bootstrap/TrophyFill'

export interface ComponentProps {
  results: Array<boolean>
}

const ResultWidget = ({ results }: ComponentProps) => {
  const [data, setData] = useState([])
  const name = useRouter().query.name
  const count = countBy(results, Boolean).true || 0
  const score = count * 10

  useEffect(() => {
    API.getAll()
      .then((resp) => {
        updateResults(resp)
      })
      .catch((err) => {
        updateResults([])
      })
  }, [])

  const updateResults = (resp) => {
    setData([
      ...resp,
      {
        name: name,
        score: score,
        active: true
      }
    ])
  }

  const renderTextResult = () => {
    if (count > 5) {
      return `${count * 10} pontos, parabéns!`
    }

    return `${count * 10} pontos :(`
  }

  const renderResults = () => {
    if (data.length === 0) return

    console.log(results)
    const orderedData = orderBy(data, ['score'], ['desc', 'asc'])

    return (
      <S.Wrapper>
        <ul>
          {orderedData.map((item, index) => (
            <S.Item key={index} active={item.active}>
              <S.Position position={index + 1}>{index + 1}</S.Position>
              <S.Name>{item.name}</S.Name>
              <S.Score>
                {item.score} <br /> pontos
              </S.Score>
            </S.Item>
          ))}
        </ul>
      </S.Wrapper>
    )
  }

  return (
    <Widget title="Resultados">
      <p>Mandou bem {name}!</p>
      <h3>Você fez {renderTextResult()}</h3>

      {renderResults()}
    </Widget>
  )
}

export default ResultWidget
