
import Carousel from 'react-bootstrap/Carousel'

const quotes = [
  {
    quote: 'We read books to find out who we are. What other people, real or imaginary, do and think and feel... is an essential guide to our understanding of what we ourselves are and may become',
    author: 'Ursula K. Le Guin',
  },
  {
    quote: '...I of all people, who ought to have known that books are written only to unite people above and beyond our own brief breath, and so to defend us against the inexorable adversary of all existence: transience and oblivion.”',
    author: 'Stephen Zweig',
  },
  {
    quote: 'I meant to write about death, only life came breaking in as usual.',
    author: 'Virginia Woolf',
  },
  {
    quote: 'It is what you read when you dont have to that determines what you will be when you cant help it.',
    author: 'Oscar Wilde',
  },
]

function QuoteCarousel() {
  return (
    <Carousel indicators={true} controls={true}>
      {quotes.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="text-center py-5 px-4">
            <p className="fs-5 fst-italic">
              "{item.quote}"
            </p>
            <p className="text-muted mb-0">
              — {item.author}
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default QuoteCarousel
