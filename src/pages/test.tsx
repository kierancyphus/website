import { useRef, useEffect } from 'react'

import Anime from 'react-animejs-wrapper'

const Test = () => {
  const myRef = useRef(null)
  const vh = window.innerHeight

  const onScroll = (e) => {
    let scrolled: number =
      (e.target.documentElement.scrollTop / window.innerHeight) * 100

    scrolled = scrolled > 100 ? 100 : scrolled
    console.log(scrolled)

    myRef.current.seekPercent(scrolled)
  }

  useEffect(() => window.addEventListener('scroll', onScroll), [])

  // useEffect(() => console.log(window.innerHeight))

  return (
    <div style={{ height: '300vh', width: '100vw' }}>
      <Anime
        ref={myRef}
        config={{
          scale: 10,
          autoplay: false,
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '50px',
            height: '50px',
            top: '50%',
            left: '50%',
            marginTop: '-25px',
            marginLeft: '-25px',
            background: 'black',
          }}
        >
          <h1>This is a test</h1>
        </div>
      </Anime>
    </div>
  )
}

export default Test
