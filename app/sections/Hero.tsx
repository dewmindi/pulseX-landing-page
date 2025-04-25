import React from 'react'

const Hero = () => {
  return (
    <div>
      <div id="main" >
        <div id='home'>
          <img src='/item7.jpg' />
        </div>

        <div id="box1"></div>
        <div id="box2">

          <div id="text" className='mt-4'>
            Dominate the Game
            <h1 className="text-2xl pl-2 mt-8 text-gray-600">
              Pixel Pulse brings you elite gaming gear engineered to champions.
            </h1>
            <h1 className="text-2xl pl-2 text-gray-600">
              Gear up with cutting-edge peripherals built for
            </h1>
            <h1 className="text-2xl pl-2 text-gray-600">
              speed, accuracy, and domination.
            </h1>
          </div>
        </div>
        <div id="box3">
          <div id="container">
            <div id="logo">
              <img src="logo.png" className="h-auto w-auto" />
            </div>
            <div id="menu">
              <ul className='font-mono'>
                <li>Home</li>
                <li>About us</li>
                <li>Shop</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
