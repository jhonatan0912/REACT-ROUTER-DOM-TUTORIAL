import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [photos, setPhotos] = useState([]);

  const getData = async () => {
    const req = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(req.data);
    setPhotos(req.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='grid grid-cols-5 w-11/12 m-auto gap-4'>
      {
        photos.map(item => (
          <div className='border'>
            <img src={item.thumbnailUrl} width="200" loading='lazy' />
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App