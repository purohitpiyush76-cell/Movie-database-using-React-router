A simple and beginner-friendly Movie Database application built with **React**, **Vite**, and **React Router**. This project demonstrates the fundamentals of client-side routing in React by allowing users to browse a list of movies, view detailed information about each movie, and navigate seamlessly between pages without reloading the application.

##  Technologies Used

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3

##  Project Structure

```text
movie-db/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── MovieCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetails.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data.js
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

##  Application Flow

* **Home** → Introduces the Movie Database application.
* **Movies** → Displays a list of available movies.
* **Movie Details** → Shows detailed information for the selected movie using a dynamic route (`/movies/:id`).
* **404 Page** → Handles invalid URLs gracefully.

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/purohitpiyush76-cell/Movie-database-using-React-router.git
```

### Navigate to the project folder

```bash
cd Movie-database-using-React-router
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## Concepts Demonstrated

* React Components
* React Router
* BrowserRouter
* Routes and Route
* Link Component
* Dynamic Routing with `useParams()`
* Component-based architecture
* Basic state-independent data rendering

## Future Improvements

* Add movie posters and thumbnails.
* Implement a search feature.
* Filter movies by genre.
* Fetch movie data from a live API such as TMDb or OMDb.
* Add responsive styling for mobile devices.
* Include dark mode support.

## Author

**Piyush Purohit**

If you found this project useful, feel free to ⭐ the repository and explore the code.
