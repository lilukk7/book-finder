
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import QuoteCarousel from '../components/QuoteCarousel'

function Explore() {
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

          <Form>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search by title or author..."
                aria-label="Search books by title or author"
              />

              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>

        </div>
      </div>

    <div className="my-5">
        <div className="col-md-10 col-lg-8 mx-auto"></div>
        <QuoteCarousel />
    </div>
    {/*Books*/}
    </div>
  )
}

export default Explore
