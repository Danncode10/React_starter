# ReactViteApp

This project is a React application bootstrapped with Vite, configured with TypeScript, TailwindCSS, Bootstrap 5, React Router v6, Axios, ESLint, and Prettier.

## Folder Structure

```
frontend/
│
├── src/
│   ├── assets/            # images, icons, fonts
│   ├── components/        # reusable UI elements
│   ├── pages/             # each page (Home, About, etc.)
│   ├── layouts/           # shared layout components
│   ├── contexts/          # global contexts (Auth, Theme)
│   ├── hooks/             # custom hooks
│   ├── services/          # axios services
│   ├── utils/             # helpers and constants
│   ├── main.tsx
│   └── App.tsx
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will typically start the application on `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This command compiles the TypeScript code and bundles the assets into the `dist` directory.

### Linting and Formatting

-   **Linting:**
    ```bash
    npm run lint
    ```
-   **Formatting:**
    ```bash
    npm run format
    ```

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast build tool that provides a lightning-fast development experience.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
-   **Bootstrap 5**: A powerful, feature-packed frontend toolkit for building responsive websites.
-   **React Router v6**: Declarative routing for React.js.
-   **Axios**: Promise-based HTTP client for the browser and Node.js.
-   **ESLint**: Pluggable JavaScript linter.
-   **Prettier**: An opinionated code formatter.
