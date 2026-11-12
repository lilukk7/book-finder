
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
    <div className="explore-page">

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-md-5">
              <h1 className="hero-title">
                Find
                <br />
                your
                <br />
                Next
                <br />
                read
              </h1>
            </div>

            <div className="col-md-7">
              <div className="hero-book">
                <img
                  src="https://i.pinimg.com/736x/72/c6/7a/72c67af70b9c14f254e4d56125b99873.jpg"
                  alt="Decorative red vintage book"
                />

                <div className="hero-book-text">
                  Discover new stories, explore different
                  literary worlds, and find your next
                  favourite author.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">

              <Form onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="search"
                    placeholder="Search by title or author..."
                    aria-label="Search books by title or author"
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Searching...' : 'Search'}
                  </Button>
                </InputGroup>
              </Form>

            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div
          className="mx-auto"
          style={{ maxWidth: '650px', width: '100%' }}
        >
          <QuoteCarousel />
        </div>
      </section>

      <section className="container results-section">

        {loading && (
          <p className="text-center">
            Searching for books...
          </p>
        )}

        {error && (
          <p className="text-danger text-center">
            {error}
          </p>
        )}

        {!loading && books.length > 0 && (
          <div className="row g-4">
            {books.map((book) => (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={book.id}
              >
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

      </section>

    </div>
  )
}

export default Explore
