import React, { useState } from 'react'
import { useRouter } from 'next/router'

import db from '../../configs.json'

import Layout from '../components/Layout'
import Widget from '../components/Widget'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from '../components/Link'

import { Option } from '../components/QuestionWidget/styled'

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
    <Layout backgroundImage={db.bg} mobileBackgroundImage={db.bgMobile}>
      <Widget title={db.title}>
        <p>{db.description}</p>

        <form onSubmit={onSubmit}>
          <Input onChange={onChange} placeholder="Diz ai seu nome :)" />
          <Button type="submit" disabled={name.length === 0} text="Jogar" />
        </form>
      </Widget>

      <Widget>
        <h1>Quizes da galera</h1>
        <ul>
          {db.external.map((linkExterno) => {
            const [projectName, githubUser] = linkExterno
              .replace(/\//g, '')
              .replace('https:', '')
              .replace('.vercel.app', '')
              .split('.')

            return (
              <li key={linkExterno}>
                <Option>
                  <Link href={`/quiz/${projectName}___${githubUser}`}>
                    {`${githubUser}/${projectName}`}
                  </Link>
                </Option>
              </li>
            )
          })}
        </ul>
      </Widget>
    </Layout>
  )
}

export default Home
