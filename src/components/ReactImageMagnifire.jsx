import React from 'react'
import { SideBySideMagnifier } from 'react-image-magnifiers'
import digital from './digital.jpg'

const ReactImageMagnifire = () => {
  return (
    <div>
      <div className="shoping-card">
        <SideBySideMagnifier
          imageSrc={"https://cdn.shopify.com/s/files/1/0500/9892/9823/products/01182015_ASHLEY_Look28_21815_1705.jpg"}
          //  https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg
          fillGapRight={18}
          fillGapLeft={13}
          fillAvailableSpace={true}
          fillAlignTop={true}
          overlayBoxColor="green"
        />
      </div>
    </div>
  )
}

export default ReactImageMagnifire
