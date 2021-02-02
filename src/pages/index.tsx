import React, { useState } from 'react'
import { useRouter } from 'next/router'

import db from '../../db.json'

import Layout from '../components/Layout'
import Widget from '../components/Widget'
import Input from '../components/Input'
import Button from '../components/Button'

const Home = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  const onChange = (event: any) => {
    setName(event.target.value)
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <Layout
      backgroundImage={db.bg}
      mobileBackgroundImage={db.bgMobile}
      title="BTS Quiz"
    >
      <Widget title={db.title}>
        <p>{db.description}</p>

        <form onSubmit={onSubmit}>
          <Input onChange={onChange} placeholder="Diz ai seu nome :)" />
          <Button type="submit" disabled={name.length === 0} text="Jogar" />
        </form>
      </Widget>

      <Widget>
        <h1>Quizes da galera</h1>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
        <p>
          Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma
          coisa fez:
        </p>
      </Widget>
    </Layout>
  )
}

export default Home
