![alt text](https://github.com/khakiiman/todo-jira-app/blob/main/src/assets/Intro.png?raw=true)

# Todo-Jira-App

A web application for task management with Kanban boards and To-Do list.

## 💻 Overview

This project is a web application designed for task management, with three main components: Kanban boards, project settings, and a To-Do list. It offers a range of features, including dark and light themes, drag-and-drop functionality for Kanban boards, and a visually appealing design with TailwindCSS and shadcn/ui.

## 📖 Table of Contents

- [Todo-Jira-App](#todo-jira-app)
  - [💻 Overview](#-overview)
  - [📖 Table of Contents](#-table-of-contents)
  - [🎉 Features](#-features)
  - [⚙️ Technologies](#️-technologies)
  - [🚀 Getting Started](#-getting-started)
  - [📜 Available Scripts](#-available-scripts)
  - [📂 Project Structure](#-project-structure)

## 🎉 Features

- Kanban Board: Manage projects using Kanban boards with drag-and-drop functionality.
- Project Settings: Define project-specific settings for Kanban boards.
- To-Do List App with JsonPlaceholder: user-friendly interface for browsing, searching and sorting blog content posts.
- Create, edit, and delete your own blog posts after authentication and design post page with comments.
- Responsive design for a seamless experience on different devices
- Dark and Light Themes: Toggle between dark and light themes for a personalized experience.
- Shadcn and RadixUI: Enhance the user interface with Shadcn and RadixUI components.

## ⚙️ Technologies

This project uses the following technologies and dependencies:

- Frontend:

  - React.js
  - Redux Toolkit for state management and React-Redux for integrating React with Redux
  - Redux Persist to hold state between routes change and reload page in local storage
  - React Hook Form for form handling and zod for validation of form inputs
  - React-Beautiful-DND for drag-and-drop functionality
  - Shadcn/ui and RadixUI for UI components
  - Tailwind CSS for styling
  - clsx for conditional CSS classes
  - React-Quill for Quill Rich Text Editor
  - Fontawesome, RadixUI, Lucide-React and HeroIcons for icons

- Build and Development:
  - Vite
  - Typescript
  - TailwindCSS
  - Eslint

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```shell
   git clone https://github.com/khakiiman/todo-jira-app
   ```
2. Navigate to the project directory:
   ```shell
   cd todo-jira-app
   ```
3. Install the dependencies:
   ```shell
   npm install
   ```
4. Start the development server:
   ```shell
   npm run dev
   ```
## 📜 Available Scripts
- npm run dev - Starts the development server.
- npm run build - Builds the production-ready code.
- npm run lint - Runs ESLint to analyze and lint the code.
- npm run preview - Starts the Vite development server in preview mode.

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
todo-jira-app/
  ├── node_modules/      # Project dependencies
  ├── public/            # Public assets
  ├── src/               # Application source code
  │   ├── components/    # React components
  │   │   └── Dashboard/ # dashboard components
  │   │   └── Sidebar/   # sidebar components
  │   │   └── ui/        # shadc/ui components
  │   ├── data/          # Initial data for Kanban
  │   ├── lib/           # Utility functions
  │   ├── models/        # models for zod or etc
  │   ├── store/         # Redux Store
  │   ├── App.tsx        # Application entry point
  │   └── index.tsx      # Main rendering file
  ├── .eslintrc.json     # ESLint configuration
  ├── components.json    # Config file for shadcnUI
  ├── index.html         # HTML entry point
  ├── postcss.config.js  # PostCSS configuration
  ├── tailwind.config.js # Tailwind CSS configuration
  ├── tsconfig.json      # TypeScript configuration
  ├── tsconfig.node.json # TypeScript Node configuration
  └── vite.config.ts     # Vite configuration
```