# hvac-template

## Project Info
- GitHub: https://github.com/Apex-Growth-Management/hvac-template
- Hosting: Vercel (auto-deploys on push to main)
- Sanity Project ID: gbxgslnv
- Sanity Dataset: production
- Sanity API Version: 2026-03-04

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- Sanity v4 (CMS) — studio at /studio
- Node v24.14.0, npm 11.9.0

## Sanity Schemas
- siteSettings (company name, badge, hero title, hero subtitle, phone, address)
- service (title, description, display order)
- stat (value, label, display order)

## Template Info
- Default company name: Arctic Air HVAC
- Style: White/light theme, red accents (#DC2626)
- Pages: home, services, about, contact

## Git Identity
- Name: Apex Growth Management
- Email: admin@apexgrowthmanagement.com

## Workflow
- Edit code locally -> git push -> Vercel auto-deploys
- .env.local is gitignored (never commit it)
- Env vars are set in Vercel dashboard
