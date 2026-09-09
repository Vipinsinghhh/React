# React Learning Repository

This repository contains my React learning journey, from basic JSX and state management to routing, Context API, Redux Toolkit, and a complete blog application.

Most folders are separate React + Vite projects. Each project can be opened and run independently.

## Learning Path

The projects are arranged roughly from beginner concepts to larger applications:

| Project | Main learning |
| --- | --- |
| [01Vitereact](./01Vitereact) | React and Vite setup, JSX, components, and props |
| [02Counter](./02Counter) | `useState`, event handling, and a counter application |
| [03tailwindProps](./03tailwindProps) | Tailwind CSS and passing props between components |
| [04bgChanger](./04bgChanger) | State-driven UI and changing the background color |
| [05passwordGenerator](./05passwordGenerator) | Controlled inputs, `useEffect`, random values, and clipboard actions |
| [06currencyConvertor](./06currencyConvertor) | API fetching, custom hooks, reusable inputs, and currency conversion |
| [07reactRouter](./07reactRouter) | Client-side routing, layouts, links, and route parameters |
| [08miniContext](./08miniContext) | Context API basics and sharing state across components |
| [09themeSwitcher](./09themeSwitcher) | Context API, theme state, and light/dark mode UI |
| [10todoContextLocal](./10todoContextLocal) | Context API, `useReducer`, local storage, and a todo app |
| [12MegaBlogApp](./12MegaBlogApp) | React Router, Redux Toolkit, Appwrite, forms, rich text, and CRUD |
| [ConditionalRenderingAndRenderingList](./ConditionalRenderingAndRenderingList) | Conditional rendering and rendering lists with keys |
| [DisplayCards](./DisplayCards) | `useEffect`, `fetch`, promises, and displaying API data |
| [DisplayCrads2](./DisplayCrads2) | Reusable card components and displaying collections of data |
| [HandlingEvents](./HandlingEvents) | Form handling, controlled inputs, events, spread syntax, and computed properties |
| [reduxToolkitTodo](./reduxToolkitTodo) | Redux Toolkit, slices, store setup, and global todo state |
| [customReact](./customReact) | A small custom React-like implementation to understand rendering fundamentals |

> The numbering currently skips `11`; this is intentional based on the folders in the repository.

## Core Concepts Covered

- JSX and functional components
- Props and component composition
- State with `useState`
- Event handling and controlled forms
- Conditional rendering and list rendering
- `useEffect` and asynchronous API requests
- Reusable custom hooks
- Tailwind CSS with Vite
- React Router and route-based navigation
- Context API and `useReducer`
- Persisting state with `localStorage`
- Redux Toolkit and React Redux
- CRUD operations with Appwrite
- Authentication and protected routes
- Form validation with React Hook Form
- Rich text editing with TinyMCE

## Running a Project

Choose any project folder and run it from that folder:

```bash
cd 02Counter
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

Common commands available in the Vite projects:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

Each project has its own `package.json` and dependencies, so install dependencies separately when switching to a project for the first time.

## Documentation and Notes

- [Context API notes](./contextNotes.md)
- [Currency converter notes](./currency.md)
- [React Router notes](./ReactRouterNotes,md)
- [Mega Blog App documentation](./12MegaBlogApp/README.md)
- [Event and form handling notes](./HandlingEvents/README.md)
- [Display cards and `useEffect` notes](./DisplayCards/README.md)

## Main Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Context API
- Redux Toolkit
- Appwrite
- React Hook Form
- TinyMCE

## Purpose

This is a practice repository for learning React by building small, focused applications. Each project isolates a concept so it can be studied, modified, and compared with the larger projects that follow.
