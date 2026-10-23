# MarketQuest — Marketing Reviewer

A responsive, buildless quiz game with separate categories for Chapter 1, **Defining Marketing for the New Realities**, and Chapter 2, **Marketing Planning and Management**, based on the accompanying reviewers for Kotler, Keller & Chernev’s *Marketing Management*, 17th edition.

## Play

- **Campaign:** all 48 original questions across six topics in the selected chapter (96 questions total).
- **Topic missions:** eight questions each, including a boardroom case mission.
- **Quick fire:** ten randomly selected questions, with no timer pressure.
- **Comeback round:** retry questions whose latest attempt was incorrect.
- **Field notes:** concise concept reminders.

Correct answers earn 100 XP. Consecutive correct answers add a bonus of 25 XP per streak step, capped at +100 XP per question. A wrong answer resets the streak. Read explanations after every answer, then advance. Answer positions are shuffled per round.

Select a chapter in the sidebar (or the chapter buttons on mobile). Each chapter has its own question bank, field notes, mastery, retry list, best score, and unfinished round. Switching chapters saves your place. Existing Chapter 1 progress is retained using its original storage key.

Progress, best completed-round score, and unfinished rounds are stored in localStorage on the current browser. Mastery counts questions whose **latest answer** is correct; it is a practice indicator, not a validated learning assessment. No account, analytics, backend, or cross-device sync. Storage-blocked browsers can play for the current session. Reset only the selected chapter from Field notes.

Keyboard: **1–4** select the displayed answer; **Enter** advances after answering.

## Run locally

Requires Python 3 for the server; Node 20+ for the optional tests. There are no npm dependencies.

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. Serve over HTTP because the app uses JavaScript modules.

```sh
npm test
npm run check
```

## Project layout

- `dist/index.html` — accessible app shell
- `dist/styles.css` — responsive visual design
- `dist/questions.js` — Chapter 1 question bank, topics, and field notes
- `dist/questions2.js` — Chapter 2 question bank, topics, and field notes
- `dist/catalog.js` — chapter categories and persistent storage keys
- `dist/engine.js` — pure round, scoring, and progress logic
- `dist/app.js` — interface, persistence, and keyboard controls
- `tests/engine.test.js` — question integrity and game behavior tests

Publish the `dist` directory on any static host. A ChatGPT Sites deployment is also maintained for this version. No server build is required.

## Educational scope

All questions and scenarios are original study material derived from the chapter reviewers. They are not copied from a publisher test bank. Examples are hypothetical; no customer or employer confidential information is included. Refer to the assigned textbook and instructor materials for authoritative coverage. Chapters 3–5 are not implemented yet.
