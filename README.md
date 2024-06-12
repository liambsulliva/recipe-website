## 👋 Introduction

Welcome to the new and revamped recipe website project! This was one of the first basic HTML sites I made while I was learning the basics, and thought it deserved a bit of a front-end facelift. Hope you enjoy!

## 💻 Demo

Check out the [Demo](https://recipes.liambsullivan.com), hosted on Vercel.

## 💪 Features:
    
- ✅ Minimal styling
- ✅ Mobile responsive
- ✅ Dark mode
- ✅ Static Page Generation

## 🛣️ Roadmap

- ❌ Migrate to JAMStack (NodeJS)
- ❌ Change landing page image on dark mode button click
- ❌ Internationalization (i18n)
- ❌ Implement user authentication
- ❌ Add search functionality
- ❌ Create a favorites feature
- ❌ Add social media icons to footer
- ❌ Improve performance and optimize loading times
- ❌ Add "See All"/Infinite Scroll
- ❌ Improve accessibility and ensure WCAG compliance
- ❌ Add a print-friendly version of recipes

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework.
- [**React**](https://react.dev) - A JavaScript library for building user interfaces.
- [**Iconify**](https://iconify.design) - A Library of SVG Icons.

## 📄 Adding a recipe

Adding a post is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/...**. The filename will be used to create the slug/URL of the page.

## Required properties:

- Layout
- Title
- Description
- Image (Post Banner)

These properties must be included in the frontmatter of the `.md` file. If not, unexpected behavior may occur.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

- `astro dev`: Starts the development server and watches for changes.
- `astro build`: Builds the project for production.
- `astro preview`: Previews the production build locally.
- `astro deploy`: Deploys the project to a hosting provider.

Make sure to install the Astro CLI by running `npm install astro`.
