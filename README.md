# Permit Path

[![Tests and build](https://github.com/ErChulo/md-learner-driver-practice/actions/workflows/ci.yml/badge.svg?branch=arena%2F3b977c89-md-learner-driver-practice)](https://github.com/ErChulo/md-learner-driver-practice/actions/workflows/ci.yml?query=branch%3Aarena%2F3b977c89-md-learner-driver-practice)
[![Vercel availability](https://img.shields.io/website?url=https%3A%2F%2Fmd-learner-driver-practice.vercel.app%2F&label=Vercel)](https://md-learner-driver-practice.vercel.app/)
[![GitHub Pages availability](https://img.shields.io/website?url=https%3A%2F%2Ferchulo.github.io%2Fmd-learner-driver-practice%2F&label=GitHub%20Pages)](https://erchulo.github.io/md-learner-driver-practice/)

The tests and build badge tracks this working branch. The site badges report HTTP availability, not content correctness or test results.

A browser-only Maryland learner permit study app. The question bank is original and uses the uploaded **Maryland Driver's Manual, October 2025** as its sole factual source. References in the app use the manual's printed page numbers. The app is not affiliated with the Maryland Motor Vehicle Administration and its questions are not official exam questions.

The manual states that the knowledge test has 25 questions and a 20-minute limit (page 7). The app uses the requested goal of 22 correct answers; this is presented as a practice goal, not a claim about the official passing threshold.

## Run locally

```sh
npm ci
npm run dev
npm run build
npm test
```

Progress is stored in IndexedDB on the current browser/device. Language and theme preferences use local storage. No accounts or backend are used. Clearing browser data removes progress. The 210 original bilingual questions are split into 182 questions across seven driving topics and 28 optional questions about obtaining a license. Full tests select 25 questions from all seven driving topics, including signs, road rules, safe habits, sharing the road, emergencies and driver responsibilities. Each test includes three or four questions per topic. The licensing topic is available separately as general information and does not affect exam-topic statistics. The bank does not cover every individual detail in the manual; study the complete manual as well. The Spanish manual supplied by the user is copyrighted and is not redistributed in this repository.

## Deployment

The app uses hash routes and relative asset paths for static hosting. Vercel can import the repository using the included `vercel.json`. The included GitHub Actions workflow deploys `main` to GitHub Pages when Pages is configured to use GitHub Actions. Alternatively, GitHub Pages can serve the repository root directly from a selected branch because the app is also valid unbundled browser modules. No API server or runtime requests are required (Google Fonts is optional; system fonts are fallbacks).
