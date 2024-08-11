import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '/home/rguktongole/my-react-app/weather/src/assets/images/Clear.jpg'
import Fog from '/home/rguktongole/my-react-app/weather/src/assets/images/fog.png'
import Cloudy from '/home/rguktongole/my-react-app/weather/src/assets/images/fog.png'
import Rainy from '/home/rguktongole/my-react-app/weather/src/assets/images/Rainy.jpg'
import Snow from '/home/rguktongole/my-react-app/weather/src/assets/images/snow.jpg'
import Stormy from '/home/rguktongole/my-react-app/weather/src/assets/images/Stormy.jpg'
import Sunny from '/home/rguktongole/my-react-app/weather/src/assets/images/Sunny.jpg'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout