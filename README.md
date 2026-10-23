# MarketQuest — Marketing Reviewer

A responsive, buildless quiz game for Chapter 1, **Defining Marketing for the New Realities**, based on the accompanying reviewer for Kotler, Keller & Chernev’s *Marketing Management*, 17th edition.

## Play

- **Campaign:** all 48 original questions across six topics.
- **Topic missions:** eight questions each, including a boardroom case mission.
- **Quick fire:** ten randomly selected questions, with no timer pressure.
- **Comeback round:** retry questions whose latest attempt was incorrect.
- **Field notes:** concise concept reminders.

Correct answers earn 100 XP. Consecutive correct answers add a bonus of 25 XP per streak step, capped at +100 XP per question. A wrong answer resets the streak. Read explanations after every answer, then advance. Answer positions are shuffled per round.

Progress, best completed-round score, and unfinished rounds are stored in localStorage on the current browser. Mastery counts questions whose **latest answer** is correct; it is a practice indicator, not a validated learning assessment. No account, analytics, backend, or cross-device sync. Storage-blocked browsers can play for the current session. Reset progress from Field notes.

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
- `dist/questions.js` — question bank, topic metadata, and field notes
- `dist/engine.js` — pure round, scoring, and progress logic
- `dist/app.js` — interface, persistence, and keyboard controls
- `tests/engine.test.js` — question integrity and game behavior tests

Publish the `dist` directory on any static host. A private ChatGPT Sites deployment is also maintained for this version. No server build is required.

## Educational scope

All questions and scenarios are original study material derived from the Chapter 1 reviewer. They are not copied from a publisher test bank. Examples are hypothetical; no customer or employer confidential information is included. Refer to the assigned textbook and instructor materials for authoritative coverage. Chapters 2–5 are not implemented yet.
