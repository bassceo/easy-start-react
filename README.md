# Easy Start React

This is a template project to quickly start developing with React, TypeScript, Vite, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [Linting](#linting)
- [Preview](#preview)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/easy-start-react.git
cd easy-start-react
npm install
```

## Usage

To start the development server, run:

```sh
npm run dev
```

## Development

This project uses Vite for fast development. The main entry point is `src/main.tsx`.

## Build

To build the project for production, run:

```sh
npm run build
```

## Linting

To lint the project, run:

```sh
npm run lint
```

## Preview

To preview the production build, run:

```sh
npm run preview
```

## Project Structure

```plaintext
easy-start-react/
├── dist/                   # Build output
├── node_modules/           # Node.js modules
├── public/                 # Public assets
├── src/                    # Source code
│   ├── app/                # Application components
│   ├── pages/              # Page components
│   ├── main.tsx            # Main entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite environment types
├── .gitignore              # Git ignore file
├── index.html              # HTML template
├── package.json            # NPM package configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript app configuration
├── tsconfig.node.json      # TypeScript node configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project README
```

## Dependencies

- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **@reduxjs/toolkit**: ^2.3.0
- **@tanstack/react-router**: ^1.81.14
- **ahooks**: ^3.8.1
- **axios**: ^1.7.7
- **tailwindcss**: ^3.4.15

## Dev Dependencies

- **TypeScript**: ~5.6.2
- **Vite**: ^5.4.10
- **ESLint**: ^9.13.0
- **PostCSS**: ^8.4.49
- **Autoprefixer**: ^10.4.20

## License

This project is licensed under the MIT License.