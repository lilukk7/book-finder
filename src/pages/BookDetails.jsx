
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getBookDetails } from '../api services/openLibraryApi.js'
import Button from 'react-bootstrap/Button'

function BookDetails() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const author = searchParams.get('author') || 'Unknown author'
  const cover = searchParams.get('cover')

  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true)
        setError('')

        const data = await getBookDetails(id)
        setBook(data)
      } catch (error) {
        setError('Could not load book details.')
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [id])
  function handleAddToReadingList() {
    const savedBooks = JSON.parse(
      localStorage.getItem('readingList') || '[]'
    )

    const alreadySaved = savedBooks.some(
      (savedBook) => savedBook.id === id
    )

    if (alreadySaved) {
      alert('This book is already in your reading list.')
      return
    }

    const newBook = {
      id,
      title: book.title,
      author,
      description: book.description,
      cover,
    }

    savedBooks.push(newBook)

    localStorage.setItem(
      'readingList',
      JSON.stringify(savedBooks)
    )

    alert('Book added to your reading list!')
  }

  if (loading) {
    return <p className="text-center mt-5">Loading book details...</p>
  }

  if (error) {
    return <p className="text-danger text-center mt-5">{error}</p>
  }

  return (
    <div className="container py-5">
      <div className="row align-items-start g-5">
        <div className="col-md-7">
          <h1>{book.title}</h1>

          <p className="text-muted fs-5">
            by {author}
          </p>

          <div className="mt-4">
            <h3>Book Summary</h3>
            <p style={{ textAlign: 'justify' }}>
              {book.description}
            </p>
          </div>

          <Button
            variant="primary"
            className="mt-3"
            onClick={handleAddToReadingList}
          >
            Add to Reading List
          </Button>
        </div>

        <div className="col-md-5 text-center">
          {cover && (
            <img
              src={cover}
              alt={`Cover of ${book.title}`}
              className="img-fluid rounded shadow"
              style={{
                width: '100%',
                maxWidth: '350px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BookDetails
