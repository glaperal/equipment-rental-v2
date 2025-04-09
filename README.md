# Equipment Rental V2

This is a web application for managing equipment rentals, built with Next.js, Prisma, and Tailwind CSS.

## Features

- **Authentication:** User registration and login.
- **Dashboard:** Overview of key metrics (can be expanded).
- **Inventory Management:** Add, view, update, and delete equipment items and categories.
- **Bookings:** Create new equipment bookings.
- **Rentals:** View current and past rentals (can be expanded).
- **Reporting:** Generate summary reports (can be expanded).
- **API Endpoints:** RESTful APIs for managing equipment, categories, users, bookings, and reports.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15+ (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [Supabase (PostgreSQL)](https://supabase.com/)
- **Authentication:** [Supabase Auth](https://supabase.com/auth) (using `@supabase/ssr` and `@supabase/supabase-js`)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
- **Linting/Formatting:** ESLint & Prettier

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 20 or later recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
- A [Supabase](https://supabase.com/) account and project.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd equipment-rental-v2
```

### 2. Install Dependencies

**Note:** This project uses React 19. Some dependencies might have peer dependency conflicts. If you encounter issues during installation, try using the `--legacy-peer-deps` flag (for npm).

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Supabase Project

**CRITICAL:** Before proceeding, you **must** have a Supabase project created.
1. Go to [supabase.com](https://supabase.com/) and create an account/log in.
2. Create a new project.
3. **Database Setup:** Your Supabase project comes with a PostgreSQL database. No extra setup is needed here, but note your database connection string for the next step. Consider enabling connection pooling (using PgBouncer) in your Supabase project settings (Database -> Connection Pooling) for better performance, especially when deploying to serverless environments.
4. **Authentication Setup:**
   - Go to your Supabase project dashboard -> Authentication -> Providers. Ensure 'Email' is enabled.
   - Go to Authentication -> URL Configuration. Set your **Site URL** (e.g., `http://localhost:3000` for local development, or your production URL).
   - Add **Redirect URLs**. For local development, add `http://localhost:3000/auth/callback`. Add your production callback URL as well (e.g., `https://yourdomain.com/auth/callback`).
   - **Disable "Confirm email"** under Authentication -> Settings if you want users to be logged in immediately after signup during development. Remember to **re-enable** it for production.

### 4. Set Up Environment Variables

Copy the example environment file and update it with your Supabase project details:

```bash
cp .env.example .env
```

Edit the `.env` file with your Supabase project's specific URLs and keys:

```dotenv
# .env

# Prisma Database Connection URL (Points to your Supabase PostgreSQL database)
# Get this from your Supabase project settings > Database > Connection string (use the URI)
# IMPORTANT: Append '?pgbouncer=true&connection_limit=1' if using Transaction mode pooling in Supabase. Adjust pool size as needed.
# Example: postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-SUPABASE-PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true&connection_limit=1
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-SUPABASE-PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true"

# Supabase Project URL
# Get this from your Supabase project settings > API > Project URL
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-SUPABASE-PROJECT-REF].supabase.co"

# Supabase Anonymous Key (Public)
# Get this from your Supabase project settings > API > Project API keys > anon public
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-SUPABASE-ANON-KEY]"

# Optional: Base URL for the application (used for redirects, etc.)
# NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
**Note:** Replace `[YOUR-PASSWORD]`, `[YOUR-SUPABASE-PROJECT-REF]`, and `[YOUR-SUPABASE-ANON-KEY]` with your actual credentials. Ensure the `DATABASE_URL` points to your Supabase database (check the port number - 5432 for direct connection, 6543 for PgBouncer).

### 5. Apply Database Migrations

Run Prisma migrations to set up the database schema in your Supabase database:

```bash
npm run prisma:migrate
# or
npx prisma migrate dev
```

This will also generate the Prisma Client based on your schema.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (requires `npm run build` first).
- `npm run lint`: Lints the codebase using ESLint.
- `npm run prisma:generate`: Generates the Prisma Client.
- `npm run prisma:migrate`: Applies database migrations.
- `npm run test`: Runs tests using Vitest.
- `npm run test:ui`: Runs tests with the Vitest UI.
- `npm run format`: Formats the code using Prettier.

## Testing

Run unit and integration tests using Vitest:

```bash
npm run test
```

To run tests with a graphical UI:

```bash
npm run test:ui
```

## Linting and Formatting

Check code quality and style:

```bash
npm run lint
```

Automatically format code:

```bash
npm run format
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Ensure your environment variables (`DATABASE_URL`, `JWT_SECRET`) are configured in your Vercel project settings.

Ensure your environment variables (`DATABASE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are configured in your Vercel project settings. Also, ensure your production URL and callback URL are correctly set in the Supabase Auth settings.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
