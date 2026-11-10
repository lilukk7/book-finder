
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import QuoteCarousel from '../components/QuoteCarousel'
import BookCard from '../components/BookCard'
import { searchBooks } from '../api services/openLibraryApi'
import { useState } from 'react'

function Explore() {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSearch(event) {
    event.preventDefault()

    if (!searchTerm.trim()) return
    try {
        setLoading(true)
        setError('')
        const results = await searchBooks(searchTerm)
        setBooks(results)
    } catch (error) {
        setError('Something went wrong. Please try again.')
    } finally {
        setLoading(false)
    }
    }

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1>Find Your Next Read</h1>
        <p className="lead">
          Discover new stories, explore different literary worlds,
          and find your next favourite author.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <Form onSubmit={handleSearch}>
            <InputGroup>
                <Form.Control
                type="search"
                placeholder="Search by title or author..."
                aria-label="Search books by title or author"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
                <Button variant="primary" type="submit">
                Search
                </Button>
            </InputGroup>
            </Form>

        </div>
      </div>

    <div className="my-5">
        <div className="mx-auto" style={{ maxWidth: '650px', width: '100%' }}>
        <QuoteCarousel />
        </div>
    </div>

    <div className="mt-5">
        {loading && <p className="text-center">Searching for books...</p>}

        {error && <p className="text-danger text-center">{error}</p>}

        {!loading && books.length > 0 && (
            <div className="row g-4">
            {books.map((book) => (
                <div className="col-12 col-sm-6 col-lg-4" key={book.id}>
                <BookCard book={book} />
                </div>
            ))}
            </div>
        )}

        {!loading && books.length === 0 && (
            <p className="text-center text-muted">
            Search for a book to discover your next read.
            </p>
        )}
    </div>
  
</div>
)
}

export default Explore
