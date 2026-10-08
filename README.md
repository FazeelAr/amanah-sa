# SKC Overseas Consultants

This is the Next.js project for SKC Overseas Consultants.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Content Management (Sanity CMS)

This website uses Sanity CMS for managing content like site settings, services, destinations, and team members. 
The content changes will automatically reflect on the live website (cached for 60 seconds via ISR).

### Accessing the Studio

1. Navigate to `/studio` on your live website or localhost (e.g. `http://localhost:3000/studio`).
2. Log in using your Sanity credentials.
3. Manage content directly from the embedded Sanity Studio.

### Editor Workflow
- Go to `Settings` to update the global Brand Name, Contact Details, and Social Links.
- Go to `Hero Section` to update the homepage hero.
- Go to `Services` or `Destinations` to manage your study abroad offerings.
- Go to `Testimonials` to add or edit student success stories.
- Go to `About Page` or `Team Members` to update your company's legacy and leadership.
- Hit **Publish** on any document to save changes. Since we use Incremental Static Regeneration (ISR), the changes will be visible on the website within 60 seconds without requiring a redeploy!
