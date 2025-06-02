# Expense Tracker Application

A modern expense tracking web application built with React and Vite. Manage your personal finances by tracking expenses across different categories.

## ![Expense Tracker Screenshot]!
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)

## Features

- ✨ **Add expenses** with name, amount, and category
- 🗑️ **Delete expenses** you no longer need
- ✏️ **Edit existing expenses** to update details
- 🔍 **Filter expenses** by category (Food, Utilities, Transport, etc.)
- 📊 **View total spending** across all or filtered expenses
- 📱 **Responsive design** that works on all devices
- 🎨 **Clean UI** with intuitive controls
Visit the website for a trial

 https://group-13-et.netlify.app/
 
## Technologies Used

- ⚛️ React 18
- ⚡ Vite
- 🎨 CSS Modules
- 

## Installation

1. Clone the repository:
   
   `git clone git@github.com:Moringa-SDF-PT10/group-13-project.git.`

2. Navigate to the project directory:

`cd group-13-project.git`
### Install dependencies:
`npm install`

Start the development server:

`npm run dev`

Open your browser and visit:

http://localhost:5173

### Available Scripts
npm run dev: Starts the development server

npm run build: Builds the app for production

npm run lint: Runs ESLint to check for code issues

npm run preview: Previews the production build locally

## Project Structure
expense-tracker/
├── public/                  # Static assets
│   ├── images/              # App images
│   ├── fonts/               # Custom fonts
│   └── favicon.ico          # Favicon
│
├── src/
│   ├── assets/              # Static assets used in components
│   │   ├── icons/           # SVG icons
│   │   └── styles/          # Global styles
│   │
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Shared components
│   │   │   ├── Header/
│   │   │   ├── CategoryFilter/
│   │   │   └── ...          
│   │   │
│   │   ├── expenses/        # Expense-related components
│   │   │   ├── ExpenseForm/
│   │   │   ├── ExpenseList/
│   │   │   └── BudgetSetter/
│   │   │
│   │   ├── ui/             # Presentational components
│   │   │   ├── buttons/
│   │   │   ├── cards/
│   │   │   └── modals/
│   │   │
│   │   └── layouts/        # Layout components
│   │       ├── MainLayout/
│   │       └── AuthLayout/
│   │
│   ├── context/            # Context providers
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/              # Custom hooks
│   │   ├── useExpenses.js
│   │   └── useAuth.js
│   │
│   ├── pages/              # Page components
│   │   ├── Auth/
│   │   │   ├── LoginPage/
│   │   │   └── ...
│   │   │
│   │   ├── Dashboard/
│   │   ├── Expenses/
│   │   │   ├── AddExpensePage/
│   │   │   └── ExpensesPage/
│   │   │
│   │   ├── Budget/
│   │   ├── Reports/
│   │   ├── Settings/
│   │   └── Profile/
│   │
│   ├── services/           # API/services
│   │   ├── auth.js
│   │   └── expenses.js
│   │
│   ├── utils/             # Utility functions
│   │   ├── helpers.js
│   │   └── validators.js
│   │
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Application entry point
│   └── routes.jsx         # Routing configuration
│
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore file
├── index.html             # Main HTML file
├── package.json           # Project dependencies
├── README.md              # Documentation
└── vite.config.js         # Vite configuration

## Project Collaborators

### Core Team Members
| Name              | Role                | GitHub Profile | Contributions |
|-------------------|---------------------|----------------|---------------|
| [Chege Wakiama]() | Project Lead        | @ munyanyaguo  | App.jsx, API Services     |
| [Ben Oluoch]()    | Data Management     | @ OluochBen    | Categories.jsx, constants |
| [Faith Wangari]() | Component Developer | @Wangari-69    | Header.js, ExpenseForm.js |
| [Paul Wafula]()   | UI/UX Developer     | @LegrandSir    | Design System, Styling    |


## Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch `git checkout -b feature/your-feature`

Commit your changes `git commit -m 'Add some feature`

Push to the branch `git push origin feature/your-feature`

Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Vite for the blazing fast development environment

React for the component-based architecture

Create Vite for the initial project setup

