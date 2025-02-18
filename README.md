# Todo App

A simple and intuitive Todo App built using React and Tailwind CSS. This application allows users to add, edit, mark as complete, and delete tasks.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks individually
- Clear all tasks at once
- Responsive design using Tailwind CSS

## Technologies Used

- React.js
- Tailwind CSS
- React Icons
- UUID for unique task IDs

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm or yarn

### Steps to Run the Application

1. Clone the repository:
   ```sh
   git clone https://github.com/Sahil-Bhowmick/To-Do-App.git
   ```
2. Navigate to the project directory:
   ```sh
   cd todo-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
5. Open the browser and go to `http://localhost:3000`

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── Form.js
│   │   ├── Todo.js
│   │   ├── Edit.js
│   │   ├── TodoList.js
│   ├── App.js
│   ├── index.js
│── package.json
│── vite.config.js
│── README.md
```

## Deployment

Live Site: [Netlify](https://to-do-089.netlify.app/)

## Contributing

If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.
