import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { countBy, orderBy } from 'lodash'
import { Lottie } from '@crello/react-lottie'

import * as S from './styled'
import Widget from '../Widget'
import API from '../../services/api'
import loadingAnimation from './trophy.json'

export interface ComponentProps {
  results: Array<boolean>
}

const ResultWidget = ({ results }: ComponentProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { name, id } = useRouter().query
  const count = countBy(results, Boolean).true || 0
  const score = count * 10

  useEffect(() => {
    if (!id) {
      API.getAll()
        .then((resp) => {
          updateResults(resp)
          saveResult(resp.length)
        })
        .catch((err) => {
          updateResults([])
        })
    }
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
    setLoading(false)
  }

  const saveResult = (size: number) => {
    if (name) {
      API.create({
        id: size,
        name: name,
        score: score
      })
    }
  }

  const renderTextResult = () => {
    if (count > 5) {
      return `${count * 10} pontos, parabéns!`
    }

    return `${count * 10} pontos :(`
  }

  const renderResults = () => {
    if (data.length === 0) return
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
      <p>{name} Parabéns por finalizar o quiz!</p>
      <h3>Você fez {renderTextResult()}</h3>

      {loading && (
        <Lottie
          width="100%"
          height="auto"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true
          }}
        />
      )}
      {renderResults()}
    </Widget>
  )
}

export default ResultWidget
