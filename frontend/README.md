# FrontEnd - GenAI Hackathon Final Project

This repository contains the frontend code for the GenAI Hackathon final project. The frontend is built using React and provides a user interface for generating analytics reports based on social media data.

## Table of Contents

- [Project Description](#project-description)
- [Setup Guide](#setup-guide)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description

will be displaying description in few time (after getting the problem statement).


## Setup Guide

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ayushflows/GenAI_Hackathon-FinalProject
   cd GenAI_Hackathon-FinalProject/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
VITE_APP_BACKEND_API=http://localhost:8080
```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Usage

1. Open the application in your browser.
2. Select a social media platform from the dropdown.
3. Select an account name from the dropdown.
4. Select a post type from the dropdown.
5. Click the "Generate Report" button to fetch and display the analytics report.

## Folder Structure

```
FrontEnd/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── api.js
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── ArcProgress.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── pages/
│   │   └── UserInputPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Create a pull request with a detailed description of your changes.
