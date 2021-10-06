import { ReactNode, FC, useEffect, useRef } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

type IMainProps = {
  meta: ReactNode
}

const gradients = [
  'bg-gradient-to-br from-red-300 to-yellow-300',
  'bg-gradient-to-br from-yellow-300 to-green-300',
  'bg-gradient-to-br from-green-300 to-blue-300',
  'bg-gradient-to-br from-blue-300 to-indigo-300',
  'bg-gradient-to-br from-indigo-300 to-pink-300',
]

const Main: FC<IMainProps> = (props) => {
  const myRef = useRef(null)

  const onScroll = (e) => {
    let scrolled: number =
      (e.target.documentElement.scrollTop / window.innerHeight) * 100

    scrolled = scrolled > 100 ? 100 : scrolled
    console.log(scrolled)

    myRef.current.seekPercent(100 - scrolled)
  }

  useEffect(() => window.addEventListener('scroll', onScroll), [])
  return (
    <>
      <div className="antialiased w-full text-gray-700">
        <Anime
          ref={myRef}
          style={{
            marginLeft: '50%',
          }}
          config={{
            targets: ['.bg-gradient-to-br'],
            translateX: () => anime.random(-600, 600),
            translateY: () => anime.random(-300, 300),
            scale: () => [0.5, anime.random(0.75, 4)],
            rotate: () => anime.random(-500, 500),
            borderRadius: () => ['50%', `${anime.random(0, 35)}%`],
            duration: () => anime.random(1400, 1600),
            delay: 200,
            // direction: 'alternate',
            // loop: true,
            // autoplay: true,
            // easing: 'cubicBezier(0.010, 1.650, 0.585, 1.650)',
          }}
        >
          {[...Array(80).keys()].map((item) => (
            <div
              className={`${gradients[item % 5]}`}
              style={{
                position: 'fixed',
                width: '50px',
                height: '50px',
                top: '50%',
                left: '50%',
                marginTop: '-25px',
                marginLeft: '-25px',
                // background: 'rgb(2,0,36)',
              }}
              key={item}
            />
          ))}
        </Anime>
        <div style={{ background: 'black', width: '100vw ', height: '100vh' }}>
          <h1>This shouldn't move</h1>
        </div>
        <div style={{ background: 'white', width: '100vw ', height: '100vh' }}>
          <h1>This shouldn't move</h1>
        </div>
      </div>
    </>
  )
}

export { Main }
