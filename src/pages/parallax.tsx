import React, { FC, useEffect, useRef, useState } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

const Parallax: FC = () => {
  const layers = [1, 2, 3, 4, 5, 6]

  const [vh, setVH] = useState(null)
  const [vw, setVW] = useState(null)

  useEffect(() => {
    console.log(window.innerHeight > window.innerWidth)
    setVH(window.innerHeight)
    setVW(window.innerWidth)
  }, [])

  const parallaxRef = useRef(null)
  const homeRef = useRef(null)

  const onScroll = (e) => {
    let scrolled: number =
      (e.target.documentElement.scrollTop / window.innerHeight) * 100

    scrolled = scrolled > 100 ? 100 : scrolled
    console.log(scrolled)

    parallaxRef.current.seekPercent(scrolled)
    homeRef.current.seekPercent(scrolled)
    return () => window.removeEventListener('scroll', onScroll)
  }

  useEffect(() => window.addEventListener('scroll', onScroll), [])

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        {vh && (
          <Anime
            ref={parallaxRef}
            config={{
              translateY: anime.stagger([-vh * 1.5, 0.2 * vh]),
              easing: 'linear',
              // delay: 3000,
              autoplay: false,
            }}
          >
            {layers.map((number) => (
              <img
                style={{
                  position: 'fixed',
                  top: -0.1 * vh,
                  left: 0,
                  zIndex: 6 - number,
                  objectFit: 'cover',
                }}
                src={`/assets/images/layer${number}.png`}
                key={`image-${number}`}
                alt={`image-${number}`}
              />
            ))}
            <div
              className="font-mono flex flex-col content-center items-center justify-around p-10 fixed top-1/2 left-1/2 w-3/5 h-1/5 ml-[-30vw] mt-[-10vh]"
              style={{
                zIndex: 7,
              }}
            >
              <p className="text-5xl antialiased drop-shadow-xl">
                Hi, my name is Kieran.
              </p>
              <p className="text-gray-400 text-3xl antialiased font-thin tracking-wider drop-shadow-xl">
                Welcome to my website.
              </p>
            </div>
          </Anime>
        )}
      </div>
      <Anime
        ref={homeRef}
        config={{
          translateY: ['100vh', '-30vh'],
          easing: 'linear',
          duration: 1800,
          // delay: 200,
          autoplay: false,
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '200vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 8,
            backgroundColor: 'black',
          }}
        ></div>
      </Anime>
      <div
        style={{
          backgroundColor: 'white',
          height: '200vh',
        }}
      ></div>
    </>
  )
}

export default Parallax
