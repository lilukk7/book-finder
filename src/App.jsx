
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Explore from './pages/Explore'



function BookDetails() {
  return (
    <div className="container py-5">
      <h1>Book Details</h1>
      <p>Book details will appear here.</p>
    </div>
  )
}

function ReadingList() {
  return (
    <div className="container py-5">
      <h1>Reading List</h1>
      <p>Saved books</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<ReadingList />} />
    </Routes>
  )
}

export default App
