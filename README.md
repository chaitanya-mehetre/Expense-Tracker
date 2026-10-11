# 💸 Expense Tracker (MERN Stack)

A full-stack expense tracker to record income and expenses, view a financial overview on a dashboard, and download your data as Excel files.

🔗 **Live Demo:** [Add your Vercel link here](https://your-app.vercel.app)

---

## ✨ Features

- User registration and login with JWT authentication
- Profile image upload
- Add, view, and delete income and expense entries
- Dashboard with total balance, income, and expenses
- Charts for the last 30 days of expenses and the last 60 days of income
- Recent transactions list
- Download income and expense data as Excel files
- Responsive UI

## 🛠️ Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, React Router, Axios, Recharts, React Hot Toast

**Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, Multer, xlsx

**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## 📁 Project Structure

```
Expense-Tracker/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Auth and upload middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Auth, income, expense, dashboard routes
│   ├── uploads/        # Uploaded profile images
│   └── index.js        # Server entry point
└── frontend/
    └── expense-tracker/
        └── src/        # React app
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/chaitanya-mehetre/Expense-Tracker.git
cd Expense-Tracker
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend/expense-tracker
npm install
```

In `src/utils/apiPaths.js`, set the backend URL:

```javascript
export const BASE_URI = "http://localhost:8000";
```

Start the app:

```bash
npm run dev
```

## 🔌 API Endpoints

| Route | Description |
| --- | --- |
| `POST /api/v1/auth/register` | Register a new user |
| `POST /api/v1/auth/login` | Log in |
| `GET /api/v1/auth/getUser` | Get logged-in user info |
| `GET /api/v1/dashboard` | Get dashboard data |
| `POST /api/v1/income/add` | Add income |
| `GET /api/v1/income/get` | Get all income |
| `DELETE /api/v1/income/:id` | Delete income |
| `GET /api/v1/income/downloadexcel` | Download income as Excel |
| `POST /api/v1/expense/add` | Add expense |
| `GET /api/v1/expense/get` | Get all expenses |
| `DELETE /api/v1/expense/:id` | Delete expense |
| `GET /api/v1/expense/downloadexcel` | Download expenses as Excel |

## 👤 Author

**Chaitanya Mehetre**
GitHub: [@chaitanya-mehetre](https://github.com/chaitanya-mehetre)