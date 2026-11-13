## Book Finder
A book discovery platform built with React and Vite, where users can explore books, search by title or author, view book details, and create a personal reading list of their favourite books.

Website URL: https://lilukk7.github.io/book-finder/

# Features

- **Explore Books:** Browse a collection of books from the Open Library API.
- **Search:** Find books by title or author.
- **Book Details:** View book covers, titles, authors, and summaries if available.
- **Reading List:** Save books to your personal reading list and delete them whenever.
- **Book Storage:** Saved books will remain in the reading list using browser localStorage.
- **Responsive Design:** A layout designed to work across different screen sizes.
- **Notifications:** Receive notifications when adding, removing book or adding already saved books.

## Build with: 

- React
- Vite
- JavaScript
- React Router
- React Bootstrap
- Bootswatch for Litera theme
- React Icons
- React Toastify
- Open Library Search API
- CSS

## API used

We used the [Open Library API](https://openlibrary.org/dev/docs/api/search) to retrieve book information, including titles, authors, publication years, summaries and cover images.

## Getting Started

To run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/book-finder.git
```

### 2. Navigate to the project folder

```bash
cd book-finder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal 

## Project Structure

```text
src/
├── api services/
│   └── openLibraryApi.js
├── components/
│   ├── NavigationBar.jsx
│   ├── QuoteCarousel.jsx
│   └── BookCard.jsx
├── pages/
│   ├── Explore.jsx
│   ├── BookDetails.jsx
│   └── ReadingList.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Reading List Storage

The reading list uses the browser's `localStorage` to save books. Saved books remain available after refreshing the page, as long as the user uses the same browser and hasn't cleared the stored data.

## Author

Created by lilukk7 for Web Programming I course.

