# Invoice Management System

A modern, full-stack invoice management solution built with Next.js, TypeScript, and Prisma. This application helps businesses manage their invoices efficiently with a beautiful, responsive UI and robust features.

## Live Demo:- 

https://invoice.kalvium.in/

## Features

- 📊 Interactive Dashboard with Revenue Analytics
- 📝 Create and Manage Invoices
- 🔍 View Recent Invoices
- 📈 Visualize Invoice Data with Interactive Graphs
- 🌙 Dark Mode Support
- 🔐 Secure Authentication
- 📱 Responsive Design
- 🎨 Modern UI with Glassmorphism Effects

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Database:** Postgres with Prisma
- **Styling:** Tailwind CSS
- **UI Components:** Custom Components with Shadcn/UI
- **Charts:** Recharts
- **Authentication:** NextAuth.js
- **Font:** Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sumit-saurabh98/invoice.git
cd invoice
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Fill in your environment variables in the `.env` file.

4. Set up the database:
```bash
pnpm prisma generate
pnpm prisma db push
```

5. Run the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

