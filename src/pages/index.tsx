import { useRouter } from 'next/router'

import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
  const router = useRouter()

  return (
    <Main
      meta={
        <Meta
          title="Kieran Cyphus Website"
          description="Kieran Cyphus is an aspiring Machine Learning Engineer based in Toronto"
        />
      }
    />
  )
}

export default Index
