import Card from 'react-bootstrap/Card'

function BookCard({ book }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={book.cover}
        alt={`Cover of ${book.title}`}
        style={{ height: '280px', objectFit: 'contain' }}
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
  )
}

export default BookCard