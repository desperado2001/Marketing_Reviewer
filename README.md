# MarketQuest — Marketing Reviewer

A responsive, buildless quiz game with separate categories for Chapter 1, **Defining Marketing for the New Realities**, Chapter 2, **Marketing Planning and Management**, Chapter 3, **Analyzing Consumer Markets**, Chapter 4, **Analyzing Business Markets**, and Chapter 5, **Conducting Marketing Research**, based on the accompanying reviewers for Kotler, Keller & Chernev’s *Marketing Management*, 17th edition.

## Play

- **Campaign:** all 48 original questions across six topics in the selected chapter (240 questions total).
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
- `dist/questions3.js` — Chapter 3 question bank, topics, and field notes
- `dist/questions4.js` — Chapter 4 question bank, topics, and field notes
- `dist/questions5.js` — Chapter 5 question bank, topics, and field notes
- `dist/catalog.js` — chapter categories and persistent storage keys
- `dist/engine.js` — pure round, scoring, and progress logic
- `dist/app.js` — interface, persistence, and keyboard controls
- `tests/engine.test.js` — question integrity and game behavior tests

Publish the `dist` directory on any static host. A ChatGPT Sites deployment is also maintained for this version. No server build is required.

## Educational scope

All questions and scenarios are original study material derived from the chapter reviewers. They are not copied from a publisher test bank. Examples are hypothetical; no customer or employer confidential information is included. Refer to the assigned textbook and instructor materials for authoritative coverage.

## Chapter 3 coverage

Six missions cover cultural/social/personal influences, motivation and needs, perception/emotions/memory, the buying process, evaluation/involvement/risk, and original applied scenarios. The weighted-score question uses explicit hypothetical weights and ratings.

Chapter naming was checked against Pearson’s [17th-edition contents flyer](https://in.pearson.com/content/dam/region-growth/india/pearson-india/in-pdc/pdf/Flyer-Marketing-Management-17e-9789367138199.pdf). Questions are independently written and are not publisher assessment items.

## Chapters 4–5 coverage

Chapter 4: business-market characteristics, buying situations, seven buying-center roles, eight buying stages, solutions and services, economic value, trust and specific investments, institutional and government buying.

Chapter 5: research purposes and the five-stage process, primary/secondary data, research approaches and instruments, sampling and contact methods, analysis and AI limitations, demand measurement and forecasting, and productivity dashboards.

Content was checked against the supplied 17th-edition textbook, Chapter 4 (printed pp. 76–90) and Chapter 5 (printed pp. 95–110). The 96 new questions, explanations, and hypothetical cases are independently written; they are not publisher test-bank items. No textbook PDF is distributed with the app.

## Challenge answer choices

All five chapters use revised distractors based on closely related concepts, incomplete interpretations, and plausible management actions. The 240 question IDs, correct answer text/indexes, and chapter storage keys are retained so prior progress and saved rounds remain compatible. Choices are shuffled each round. The harder bank is a content revision, not a separate difficulty mode.

## Explanation for every choice

All 240 questions include four option-specific rationales (960 in total). After submitting, learners see each displayed option labeled correct or incorrect, their selected answer, and the reason for that judgment. The same reasoning appears in end-of-round review in the original shuffled display order. Nothing is revealed before submission. Existing IDs, answer keys, scores, and storage keys are preserved.
