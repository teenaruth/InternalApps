
import './App.css'
import DynamicForm from './Form'
import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import { data } from './data'

function App() {
  const [streamContent, setStreamContent] = useState([])

  const [currentItem, setCurrentItem] = useState('LinkedIn')

  useEffect(() => {
    setStreamContent(data)
  }, [])

  return (
    <section className='jobs-center'>
      <Navbar
        streamContent={streamContent}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <DynamicForm streamContent={streamContent} currentItem={currentItem}/>
    </section>
  )
}

export default App
