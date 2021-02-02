import React from 'react'
import Widget from '../Widget'
import { Lottie } from '@crello/react-lottie'
import loadingAnimation from './loading.json'

const Loading = () => {
  return (
    <Widget noPadding>
      <div style={{ background: '#885ae5' }}>
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
      </div>
    </Widget>
  )
}

export default Loading
