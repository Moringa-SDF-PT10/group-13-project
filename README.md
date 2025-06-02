# Expense Tracker Application

A modern expense tracking web application built with React and Vite. Manage your personal finances by tracking expenses across different categories.

## Features

- ✨ *Add expenses* with name, amount, and category
- 🗑️ *Delete expenses* you no longer need
- ✏️ *Edit existing expenses* to update details
- 🔍 *Filter expenses* by category (Food, Utilities, Transport, etc.)
- 📊 *View total spending* across all or filtered expenses
- 📱 *Responsive design* that works on all devices
- 🎨 *Clean UI* with intuitive controls

Visit the website for a to access the app via the link below

 https://group-13-et.netlify.app/

 ## Expense Tracker Screenshot
![Screenshot 2025-06-03 010002](https://github.com/user-attachments/assets/f6aa2e51-5a1d-45c5-90cd-1a88b2aea131)

![Screenshot 2025-06-03 010025](https://github.com/user-attachments/assets/a5481b6d-3808-4d33-8dfa-bde5b5643e79)

![Screenshot 2025-06-03 010103](https://github.com/user-attachments/assets/8246cf67-cb7d-4ead-bcb1-0ccb633ad595)

![Screenshot 2025-06-03 010224](https://github.com/user-attachments/assets/f575050b-95a4-4371-9914-c5285e09df2d)

![Screenshot 2025-06-03 010639](https://github.com/user-attachments/assets/f08ea3b5-4a6c-4e1a-9bff-e0b4b558b968)



## Technologies Used

- ⚛️ React 18
- ⚡ Vite
- 🎨 CSS Modules
- Public Api

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
`npm run dev`: Starts the development server

`npm run build`: Builds the app for production

`npm run lint`: Runs ESLint to check for code issues

`npm run preview`: Previews the production build locally

## 📁 Project Structure
| Path                       | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `node_modules/`            | Project dependencies (auto-managed by npm)        |
| `public/`                  | Publicly accessible static files                  |
| `src/`                     | Main source code directory                        |
| ├── `assets/`              | Static assets like images                         |
| └──── `react.svg`          | React logo SVG file                               |
| ├── `components/`          | UI components and pages                           |
| ├──── `AddExpensePage.jsx` | Page to add a new expense                         |
| ├──── `AuthContext.jsx`    | Authentication context provider                   |
| ├──── `BudgetPage.jsx`     | Budget management page                            |
| ├──── `BudgetSetter.jsx`   | Component to set or edit budget                   |
| ├──── `CategoryFilter.jsx` | Filter component for expense categories           |
| ├──── `DashboardPage.jsx`  | Main dashboard overview                           |
| ├──── `ExpenseForm.jsx`    | Form for creating/editing expenses                |
| ├──── `ExpenseList.jsx`    | List component showing all expenses               |
| ├──── `ExpensesPage.jsx`   | Page listing user expenses                        |
| ├──── `Header.jsx`         | Top navigation header                             |
| ├──── `HomePage.jsx`       | Landing page                                      |
| ├──── `LoginPage.jsx`      | User login page                                   |
| ├──── `NavBar.jsx`         | Sidebar or navigation bar                         |
| ├──── `ProfilePage.jsx`    | User profile and settings page                    |
| ├──── `RegisterPage.jsx`   | User registration page                            |
| ├──── `ReportsPage.jsx`    | Expense reports and analysis                      |
| ├──── `SettingsPage.jsx`   | App settings/configuration page                   |
| ├── `App.css`              | App-wide CSS styling                              |
| ├── `App.jsx`              | Root component for the app                        |
| ├── `index.css`            | Global index styles                               |
| ├── `main.jsx`             | ReactDOM root initialization                      |
| └── `Summary.js`           | Component or utility to summarize budget/expenses |
| `.gitignore`               | Git ignored files and folders                     |
| `db.json`                  | JSON server database (mock backend)               |

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
