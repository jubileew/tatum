This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Test Cases:
1. Login Page Test

- Username Input Check: Ensure the user can only enter a username.

- Email Validation: Check that an error message appears when a non-existent username is entered.

- Role-based Redirection: Test login with each role (Admin, PrimeUser, RegularUser, Viewer) to ensure the correct page is rendered based on the role.

- Modal Visibility: Verify that the login modal appears if the user is not logged in and disappears after successful login.

2. Task List Page Test

- Task Sorting: Ensure tasks are sorted by created_at timestamp in descending order.

- Role-based Task Filtering:
Admin should see all tasks.
PrimeUser should see all tasks.
RegularUser should see only their created tasks.

- Viewer should see only tasks assigned to them.

- Search Functionality:
Test if search works by task name, reporter name, assignee, description, etc.

- Task Filter Status: Verify if task filters (status, type) dynamically update based on available data.

- Task Count Update: Check that the task count updates correctly after applying filters.

3. Role-based Rendering

- Admin Role: Ensure Admin can view the full user list and see the "Invite User" button.

- PrimeUser Role: Ensure PrimeUser can view the full user list but the "Invite User" button is disabled.

- RegularUser Role: Ensure RegularUser can only view their own information.

- Viewer Role: Ensure Viewer cannot access the task list page, and the page is disabled in the menu.