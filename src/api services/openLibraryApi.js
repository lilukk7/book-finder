
const BASE_URL = 'https://openlibrary.org/search.json'

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
