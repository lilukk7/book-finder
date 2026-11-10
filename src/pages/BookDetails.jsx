
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getBookDetails } from '../api services/openLibraryApi.js'

function BookDetails() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const author = searchParams.get('author') || 'Unknown author'   

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

  if (loading) {
    return <p className="text-center mt-5">Loading book details...</p>
  }

  if (error) {
    return <p className="text-danger text-center mt-5">{error}</p>
  }

  return (
    <div className="container py-5">
      <h1>{book.title}</h1>
      <p className="text-muted">by {author}</p>
      
      <div className="mt-4">
        <h3>Book Summary</h3>
        <p>{book.description}</p>
    </div>
    </div>
  )
}

export default BookDetails
