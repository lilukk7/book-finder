
const BASE_URL = 'https://openlibrary.org/search.json'
const WORKS_URL = 'https://openlibrary.org/works'


export async function searchBooks(query) {
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&fields=key,title,author_name,first_publish_year,cover_i&limit=20`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error: Failed to fetch books')
  }

  const data = await response.json()

  return data.docs.map((book) => ({
    id: book.key,
    title: book.title,
    author: book.author_name?.[0] || 'Unknown author',
    year: book.first_publish_year || 'Unknown date',
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
  }))
}

export async function getBookDetails(workId) {
  const response = await fetch(`${WORKS_URL}/${workId}.json`)

  if (!response.ok) {
    throw new Error('Failed to fetch book details')
  }

  const data = await response.json()

  const description =
    typeof data.description === 'string'
      ? data.description
      : data.description?.value ||
        'No description is available for this book yet.'

  return {
    title: data.title,
    description,
    subjects: data.subjects || [],
  }
}
