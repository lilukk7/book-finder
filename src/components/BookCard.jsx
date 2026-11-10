import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
     <Link
      to={`/book/${encodeURIComponent(book.id.replace('/works/', ''))}`}
      className="text-decoration-none text-reset"
    >
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={
            book.cover ||
            'https://raminabooks.com/storage/app/media/Book%20cover%20unavailable.jpg'
        }
        alt={`Cover of ${book.title}`}
        style={{
            height: '280px',
            objectFit: 'contain',
            padding: '10px',
        }}
        />

      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="text-muted">
          {book.author}
        </Card.Text>
        <Card.Text>
          Published: {book.year}
        </Card.Text>
      </Card.Body>
    </Card>
  </Link>
)}

export default BookCard