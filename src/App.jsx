
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Explore from './pages/Explore'
import BookDetails from './pages/BookDetails'
import ReadingList from './pages/ReadingList'

function App() {
  return (
    <> 
     <NavigationBar />
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<ReadingList />} />
    </Routes>
    </>
  )
}

export default App
