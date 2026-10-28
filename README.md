# Permit Path

A browser-only Maryland learner permit study app. The question bank is original and uses the uploaded **Maryland Driver's Manual, October 2025** as its sole factual source. References in the app use the manual's printed page numbers. The app is not affiliated with the Maryland Motor Vehicle Administration and its questions are not official exam questions.

The manual states that the knowledge test has 25 questions and a 20-minute limit (page 7). The app uses the requested goal of 22 correct answers; this is presented as a practice goal, not a claim about the official passing threshold.

## Run locally

```sh
npm ci
npm run dev
npm run build
```

Progress is stored in IndexedDB on the current browser/device. Language and theme preferences use local storage. No accounts or backend are used. Clearing browser data removes progress. Tests are assembled from a small bank of 30 original questions; they are an aid, **not a complete assessment of every detail in the manual**. Study the whole manual. The Spanish manual supplied by the user is copyrighted and is not redistributed in this repository.

## Deployment

The app uses hash routes and relative asset paths for static hosting. Vercel can import the repository using the included `vercel.json`. The included GitHub Actions workflow deploys `main` to GitHub Pages when Pages is configured to use GitHub Actions. Alternatively, GitHub Pages can serve the repository root directly from a selected branch because the app is also valid unbundled browser modules. No API server or runtime requests are required (Google Fonts is optional; system fonts are fallbacks).
