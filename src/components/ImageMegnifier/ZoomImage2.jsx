import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
function ZoomImage2() {

  return (
    <div style={{ height: "200px", width: "400px" }}>
      {/* <ReactImageMagnify {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: "https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg",
        },
        largeImage: {
          src: "https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg",
          width: 1200,
          height: 1800
        },
        shouldUsePositiveSpaceLens: true
      }} /> */}
      <div style={{ width: 200, height: 100 }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src:
                "https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg",
              width: 100,
              height: 550
            },
            largeImage: {
              src:
                "https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg",
              width: 1200,
              height: 1800
            },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "300%"
            }
          }}
        />
      </div>
    </div>
  )
}

export default ZoomImage2
