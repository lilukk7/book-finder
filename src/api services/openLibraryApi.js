
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



function cleanDescription(text) {
  return text
    // Remove everything starting from "Preceded by:"
    .replace(/\s*Preceded by:[\s\S]*/i, '')

    // Remove Markdown links, keeping their visible text
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, '$1')

    // Remove reference-style links
    .replace(/\[([^\]]+)\]\[\d+\]/g, '$1')

    // Remove standalone reference markers
    .replace(/\[\d+\]/g, '')

    // Remove leftover "(source)" text
    .replace(/\s*\(source\)/gi, '')

    // Clean up extra whitespace
    .replace(/\n{2,}/g, '\n\n')
    .trim()
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

  const cleanedDescription = cleanDescription(description)

  return {
    title: data.title,
    description: cleanedDescription,
    subjects: data.subjects || [],
  }
}
