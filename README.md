# Oompa Loompa's Crew

Frontend technical test for Napptilus Tech Labs.

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- Redux Toolkit
- CSS

## Getting started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run the application

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

## Features

- Oompa Loompa listing
- Infinite scroll
- Search by first name, last name and profession
- Oompa Loompa detail view
- Navigation back to the Main View by clicking the header logo/icon
- 24-hour data caching for list and detail data
- Loading, error and empty states
- Responsive layout
- HTML description rendered as formatted content

## Technical decisions

### State management and caching

Redux toolkit is used to store the Oompa Loompa data and make it available across the application.

The list and detail data include a timestamp to determine whether the cached data is still valid. A new request is made when the cached data is missing or more than 24 hours old.

Detail data is stored by Oompa Loompa ID.

### Search and filtering

Search is performed locally on the data already loaded from the API and updates instantly as the user types. It checks the first name, last name and profession, without making additional API request.

### Infinite scroll

IntersectionObserver is used to detect when the user reaches the end of the list and load the next page from the API.

### Routing

React Router is used to handle client-side navigation between the listing and detail views. Clicking an Oompa Loompa navigates to its detail view using the dynamic /:id route. Clicking the header icon navigates back to the main view (/).

## Assets

The provided PNG icons were converted to WebP, reducing their file size while maintaining the required visual quality.
