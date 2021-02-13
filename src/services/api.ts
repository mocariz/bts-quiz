function getAll() {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}results`).then(
    async (response) => {
      if (response.ok) {
        const data = await response.json()
        return data
      }

      throw new Error('Não foi possível pegar os dados :(')
    }
  )
}

function create(body: any) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}results`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json()
      return data
    }

    throw new Error('Não foi possível cadastrar os dados :(')
  })
}

export default {
  getAll,
  create
}
