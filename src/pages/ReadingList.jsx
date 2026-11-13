
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function ReadingList() {
  const [savedBooks, setSavedBooks] = useState(() => {
    return JSON.parse(localStorage.getItem('readingList') || '[]')
  })

  function handleRemove(id) {
    const updatedBooks = savedBooks.filter(
      (book) => book.id !== id
    )

    setSavedBooks(updatedBooks)
    localStorage.setItem('readingList', JSON.stringify(updatedBooks))
    toast.success('Book removed from your reading list!')
  }

  if (savedBooks.length === 0) {
    return (
      <div className="container text-center py-5">
        <h1>My Reading List</h1>
        <p className="mt-4">
          Reading list is empty. Explore new books and find your next read!
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Explore Books
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">My Reading List</h1>

      <div className="row g-4">
        {savedBooks.map((book) => (
           <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column" key={book.id}>
            <Link
                to={`/book/${encodeURIComponent(book.id)}?author=${encodeURIComponent(book.author)}&cover=${encodeURIComponent(book.cover || '')}`}
                className="text-decoration-none text-reset">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={book.cover || 'https://placehold.co/300x400?text=No+Cover'}
                alt={`Cover of ${book.title}`}
                style={{
                  height: '280px',
                  objectFit: 'contain',
                  padding: '10px',
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="text-muted">
                  {book.author}
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
            <Button
                  variant="outline-danger"
                  className="mt-auto"
                  onClick={() => handleRemove(book.id)}
                >
                  Remove from List
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReadingList
