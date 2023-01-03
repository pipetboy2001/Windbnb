import { useState } from 'react'
import  Header  from './Components/Header'
import Filters from './Components/Filters'
import List from "./Components/List"

function App() {

  const [showFilters, setShowFilters] = useState(false)
  const [location, setLocation] = useState('')
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  return (
    <div className="app">

      <Header setShowFilters={setShowFilters} location={location} adults={adults} children={children} />

      <Filters showFilters={showFilters} setShowFilters={setShowFilters} setLocation={setLocation} adults={adults} setAdults={setAdults} children={children} setChildren={setChildren} location={location} />

      <List location={location} adults={adults} children={children} />

    </div>
  )
}

export default App
