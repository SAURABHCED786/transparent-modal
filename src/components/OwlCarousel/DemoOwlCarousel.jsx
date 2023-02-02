import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
function DemoOwlCarousel() {
  return (
    <div>
      <div className='container-fluid' >
        <div className="row title" style={{ marginBottom: "20px" }} >
          <div className="col-sm-12 text text-info">
            Owl Carousel In React Application
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <OwlCarousel
          stagePadding={0}
          autoplay={true}
          slideTransition="linear"
          autoplaySpeed={3000}
          autoplayTimeout={2000}
          autoplayHoverPause={true}
          items={3}
          className="owl-theme"
          loop
          nav={false}
          margin={8} >
          <div><img className="img" src={'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/seljalandsfoss-waterfall-during-sunset-beautiful-waterfall-iceland_335224-596.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg'} /></div>
          <div><img className="img" src={'https://img.freepik.com/free-photo/traveller-sitting-rock-holding-camera-take-photo-doi-pha-mon-mountains-chiang-rai-thailand_335224-1078.jpg'} /></div>
        </OwlCarousel>
      </div>
    </div>
  )
}

export default DemoOwlCarousel
