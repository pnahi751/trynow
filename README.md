# 🌊 Satsang Sarita

Internal digital library management system built with **Vite + React + Supabase**.

## Features

- Public searchable multilingual library (Gujarati + English)
- Hybrid responsive layout:
  - Desktop table view
  - Mobile card view with load-more
- Book details screen with clean text-first presentation
- Admin route structure and protected pages
- Admin dashboard widgets
- Add/Edit book form with year/pages validation
- Supabase client scaffold with environment-based initialization

## Routes

### Public
- `/`
- `/book/:id`

### Admin
- `/admin/login`
- `/admin/dashboard`
- `/admin/books`
- `/admin/add`
- `/admin/edit/:id`

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Build

```bash
npm run build
```
