Full Stack AI Career Coach
A comprehensive AI-driven career coaching platform built using Next.js, Neon DB, Tailwind CSS, Prisma, Inngest, and Shadcn UI. This platform leverages AI to provide personalized career guidance, resume analysis, and skill development recommendations.

Key Features
Seamless user authentication and onboarding with Clerk
Dynamic data management using Neon DB and Prisma
AI-Driven career recommendations powered by Gemini API
Modular and elegant UI components with Shadcn UI
Background jobs, event handling, and automation using Inngest
Real-time data processing and workflow management
User Authentication with Clerk (Sign Up, Sign In, Onboarding)
Real-time Data Fetching and Syncing with Neon DB
AI-Driven Career Insights using Gemini API
Elegant UI Components with Shadcn UI
Advanced Job Matching and Skill Assessment
Workflow Automation with Inngest
AI Cover Letter Generator
Resume Builder with AI Enhancements
Interview Preparation with Personalized Questions
Technologies Used
Next.js: React framework for server-side rendering and routing.
Neon DB: PostgreSQL database for structured data storage.
Prisma: ORM for database interactions.
Tailwind CSS: Utility-first CSS framework for styling.
Inngest: Workflow orchestration and event handling (e.g., background tasks, webhooks).
Shadcn UI: Reusable UI components.
Clerk: User authentication and management.
Next.js: React framework for server-side rendering and routing.
Neon DB: PostgreSQL database for structured data storage.
Prisma: ORM for database interactions.
Tailwind CSS: Utility-first CSS framework for styling.
Inngest: Workflow orchestration and event handling.
Shadcn UI: Reusable UI components.
Clerk: User authentication and management.
Prerequisites
Node.js (v18 or higher)
Neon DB account
Clerk account
Gemini API key
Installation
Clone the Repository:

git clone https://github.com/ybthummar/EraAI.git
cd EraAI
Install Dependencies:

npm install
Environment Variables: Create a .env file in the root directory with the following variables:

DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY= 
INNGEST_API_KEY= 
Create a .env file in the root directory with the following variables:

DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY= 
Set Up Prisma and Inngest:

npx prisma generate
npx prisma migrate dev
npx inngest dev
npx prisma generate
npx prisma migrate dev
Run the Application:

npm run dev
Application will be available at http://localhost:3000.

Commands
Development: npm run dev
Build: npm run build
Start: npm start
Lint: npm run lint
Folder Structure
EraAI/
├── .next/
│   ├── build/
│   ├── cache/
│   └── static/
├── actions/
├── app/
│   ├── auth/
│   ├── main/
│   ├── api/
│   └── lib/
├── components/
├── data/
├── hooks/
├── lib/
├── node_modules/
├── prisma/
├── public/
├── .env
├── .eslintrc.json
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.mjs
EraAI/
├── components/
├── prisma/
├── pages/
├── styles/
├── utils/
├── .env
├── next.config.js
├── tailwind.config.js
├── README.md
Deployment
Ensure all required environment variables are properly set in the .env file.
Run npx prisma migrate deploy to apply database migrations in the production environment.
Start the Inngest server using npx inngest start.
Deploy to Vercel, Railway, or any preferred cloud provider.
Configure your Neon DB and Prisma settings in the .env file.
Deploy using Vercel, Railway, or any preferred cloud provider.
📫 Contact
For further inquiries or support, feel free to reach out to Yug Thummar at yugthummar001@gmail.com. this is my project now i want to add interactive bot in this website now give me step by step process "# EraAI" 
