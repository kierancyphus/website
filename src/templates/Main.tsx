import { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    <h1>Hello this is another test</h1>
  </div>
)

export { Main }
