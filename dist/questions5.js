// Original study material with plausible, concept-based challenge choices. No publisher test-bank content.
export const topics = [
 {
  "id": "scope5",
  "name": "Ask the right question",
  "tag": "01",
  "description": "Insights, problem definition & research objectives",
  "icon": "◎"
 },
 {
  "id": "design5",
  "name": "Design the study",
  "tag": "02",
  "description": "Sources, approaches & experiments",
  "icon": "↗"
 },
 {
  "id": "instruments5",
  "name": "Choose your tools",
  "tag": "03",
  "description": "Questionnaires, qualitative tools & sampling",
  "icon": "◈"
 },
 {
  "id": "evidence5",
  "name": "Read the evidence",
  "tag": "04",
  "description": "Collection, analysis, AI & decision quality",
  "icon": "▦"
 },
 {
  "id": "demand5",
  "name": "Forecast the opportunity",
  "tag": "05",
  "description": "Demand, potential, forecasts & market share",
  "icon": "✳"
 },
 {
  "id": "cases5",
  "name": "The research decision lab",
  "tag": "06",
  "description": "Metrics, dashboards & applied research cases",
  "icon": "⚑"
 }
];
export const questions = [
 {
  "id": "ch5-01",
  "topic": "scope5",
  "prompt": "What is the central purpose of marketing research?",
  "options": [
   "Generate information and insight that improve marketing decisions",
   "Reduce uncertainty by selecting evidence aligned with management’s preferred action",
   "Use satisfaction measurement as the main explanation of marketing performance",
   "Describe market patterns separately from their implications for decisions"
  ],
  "answer": 0,
  "explanation": "Research links customers and markets to decisions through relevant information. Data collection is useful when the findings clarify a problem, opportunity, or course of action."
 },
 {
  "id": "ch5-02",
  "topic": "scope5",
  "prompt": "Which statement is a marketing insight rather than a raw observation?",
  "options": [
   "Checkout abandonment is concentrated among users who reach the delivery-fee screen",
   "Customers abandon checkout when late delivery fees make the total seem uncertain, suggesting a need for earlier disclosure",
   "Average order value is lower among customers who leave before payment",
   "More customers leave the delivery-fee screen than the product-selection screen"
  ],
  "answer": 1,
  "explanation": "An insight interprets the pattern and explains its relevance to a decision. The explanation should still be tested against evidence rather than treated as proven by a single statistic."
 },
 {
  "id": "ch5-03",
  "topic": "scope5",
  "prompt": "Sales have declined. Which research problem is most actionable?",
  "options": [
   "Test whether more advertising restores sales without examining other explanations",
   "Use existing buyers’ satisfaction to explain the full market decline",
   "Determine which changes in customer choice, availability, or experience explain the decline in the defined market",
   "Measure all residents’ awareness before defining the relevant customer market"
  ],
  "answer": 2,
  "explanation": "A useful definition is focused enough to guide a study while allowing plausible explanations. Defining the problem as proof of a favored solution introduces bias from the start."
 },
 {
  "id": "ch5-04",
  "topic": "scope5",
  "prompt": "A team interviews buyers to discover possible reasons for a poorly understood problem. This is primarily…",
  "options": [
   "Descriptive research",
   "Causal research",
   "Demand forecasting from past sales",
   "Exploratory research"
  ],
  "answer": 3,
  "explanation": "Exploratory research develops understanding and possible explanations. It can guide later measurement or testing but does not by itself quantify the prevalence of every discovered theme."
 },
 {
  "id": "ch5-05",
  "topic": "scope5",
  "prompt": "A survey estimates the percentage of target buyers aware of a brand. This is primarily…",
  "options": [
   "Descriptive research",
   "Exploratory research",
   "Causal research",
   "Experimental research"
  ],
  "answer": 0,
  "explanation": "Descriptive research measures characteristics or patterns, such as awareness levels. Estimating how many people know a brand differs from identifying what caused their awareness."
 },
 {
  "id": "ch5-06",
  "topic": "scope5",
  "prompt": "A study asks whether changing a message causes more purchases. Which research purpose fits?",
  "options": [
   "Descriptive research",
   "Causal research",
   "Exploratory research",
   "Behavioral observation without a causal design"
  ],
  "answer": 1,
  "explanation": "The question concerns a cause-and-effect relationship. A suitable design needs to address competing explanations, not merely observe that message exposure and sales occurred together."
 },
 {
  "id": "ch5-07",
  "topic": "scope5",
  "prompt": "Which sequence follows this chapter’s five-stage research process?",
  "options": [
   "Define the problem → collect information → develop the plan → analyze information → make the decision",
   "Develop the plan → define the problem → collect information → make the decision → analyze information",
   "Define the problem → develop the plan → collect information → analyze information → make the decision",
   "Define the problem → develop the plan → analyze information → collect information → make the decision"
  ],
  "answer": 2,
  "explanation": "The chapter connects a defined business problem to a research plan, collection, analysis, and a managerial decision. Planning and interpretation make data useful for action."
 },
 {
  "id": "ch5-08",
  "topic": "scope5",
  "prompt": "Research is expected to improve a decision’s payoff by ₱80,000 and costs ₱100,000, with all other effects excluded. What follows?",
  "options": [
   "It is justified because the benefit recovers most research spending",
   "It is justified by uncertainty reduction despite the lower payoff improvement",
   "Its expected return is positive after adding the benefit to research cost",
   "Its expected incremental benefit does not justify its cost on these assumptions"
  ],
  "answer": 3,
  "explanation": "Compare the expected improvement attributable to research with its cost: 80,000 minus 100,000 is negative 20,000. This is an expected-value comparison, not a guarantee about the outcome."
 },
 {
  "id": "ch5-09",
  "topic": "design5",
  "prompt": "Existing government statistics collected for another purpose are…",
  "options": [
   "Secondary data",
   "External primary data",
   "Internal primary data",
   "Custom-project data"
  ],
  "answer": 0,
  "explanation": "Secondary data already exist and were gathered for another purpose. Their usefulness depends on relevance, coverage, timing, and quality, not only ease of access."
 },
 {
  "id": "ch5-10",
  "topic": "design5",
  "prompt": "A company commissions new interviews specifically to investigate its current launch. These produce…",
  "options": [
   "Secondary data",
   "Primary data",
   "Syndicated data",
   "Behavioral records"
  ],
  "answer": 1,
  "explanation": "Primary data are gathered for the current research purpose. They can be collected internally or through an external research organization."
 },
 {
  "id": "ch5-11",
  "topic": "design5",
  "prompt": "Why usually examine suitable secondary data before commissioning primary research?",
  "options": [
   "They offer a stronger causal basis than newly designed research",
   "They remove the need to define the population and sample",
   "They may answer the question more quickly and economically",
   "Their prior collection establishes direct comparability with the current question"
  ],
  "answer": 2,
  "explanation": "An existing source can reduce cost and duplication when it fits the problem. Check definitions, recency, coverage, and credibility before relying on it."
 },
 {
  "id": "ch5-12",
  "topic": "design5",
  "prompt": "A researcher watches how households use a product in everyday routines. Which approach is most evident?",
  "options": [
   "Survey research",
   "Experimental research",
   "Secondary-data analysis",
   "Observational research"
  ],
  "answer": 3,
  "explanation": "Observation captures behavior in context and can reveal difficulties people do not describe accurately. Observed actions still need careful interpretation; observation alone may not explain motives."
 },
 {
  "id": "ch5-13",
  "topic": "design5",
  "prompt": "A researcher spends time within consumers’ daily lives to understand unspoken practices and meanings. This is closest to…",
  "options": [
   "Ethnographic research",
   "Focus-group research",
   "Behavioral-record analysis",
   "Longitudinal survey research"
  ],
  "answer": 0,
  "explanation": "Ethnography seeks contextual and cultural understanding through immersion. It can reveal unmet needs that a brief survey misses, while its findings still require appropriate scope and interpretation."
 },
 {
  "id": "ch5-14",
  "topic": "design5",
  "prompt": "Which limitation most directly applies to a small focus group?",
  "options": [
   "Skilled moderation establishes the prevalence of each theme",
   "Its participants’ views cannot automatically represent the whole market",
   "Participant agreement removes the need to assess selection",
   "Several focus groups together constitute a probability sample"
  ],
  "answer": 1,
  "explanation": "Focus groups help explore language, perceptions, and motives. Their small, selected samples and group dynamics make population percentages an inappropriate automatic inference."
 },
 {
  "id": "ch5-15",
  "topic": "design5",
  "prompt": "Actual transaction records and website purchase paths are most directly used in…",
  "options": [
   "Survey research",
   "Ethnographic research",
   "Behavioral research",
   "Experimental research"
  ],
  "answer": 2,
  "explanation": "Behavioral data record what people do rather than only what they report. These records can reveal patterns, though they may not establish why the behavior occurred."
 },
 {
  "id": "ch5-16",
  "topic": "design5",
  "prompt": "Which design most strengthens an A/B test of two advertising messages?",
  "options": [
   "Match on age but allow prices and campaign timing to differ",
   "Compare total sales without adjusting for unequal message exposure",
   "Use equal budgets for messages shown before and after launch",
   "Randomly assign comparable eligible users, change the message, and keep other conditions consistent"
  ],
  "answer": 3,
  "explanation": "Random assignment and controlled conditions reduce competing explanations. Evaluate the relevant outcome and uncertainty rather than attributing every observed difference to the message automatically."
 },
 {
  "id": "ch5-17",
  "topic": "instruments5",
  "prompt": "A survey lets people explain their main complaint in their own words. This is a…",
  "options": [
   "Open-end question",
   "Closed-end multiple choice",
   "Semantic differential",
   "Dichotomous"
  ],
  "answer": 0,
  "explanation": "Open-end questions allow unanticipated answers and useful language to emerge. They need thoughtful coding and interpretation rather than simple automatic counts of fixed categories."
 },
 {
  "id": "ch5-18",
  "topic": "instruments5",
  "prompt": "A question offers exactly Yes or No. Which type is it?",
  "options": [
   "Multiple-choice with several graded responses",
   "Dichotomous",
   "Likert scale",
   "Semantic differential"
  ],
  "answer": 1,
  "explanation": "Dichotomous questions offer two response choices. They are easy to tabulate but may oversimplify a situation when respondents need a genuine additional option."
 },
 {
  "id": "ch5-19",
  "topic": "instruments5",
  "prompt": "Respondents rate agreement from strongly disagree to strongly agree. This is a…",
  "options": [
   "Semantic differential",
   "Importance scale",
   "Likert scale",
   "Intention-to-buy scale"
  ],
  "answer": 2,
  "explanation": "A Likert item records degrees of agreement with a statement. Clear, neutral wording matters because the scale cannot rescue a biased or confusing proposition."
 },
 {
  "id": "ch5-20",
  "topic": "instruments5",
  "prompt": "A brand is rated between the opposite descriptors modern and old-fashioned. This is a…",
  "options": [
   "Likert agreement scale",
   "Importance scale",
   "Purchase-intention scale",
   "Semantic differential"
  ],
  "answer": 3,
  "explanation": "A semantic differential places responses between contrasting descriptors. It differs from asking for agreement with a sentence or inviting an unrestricted explanation."
 },
 {
  "id": "ch5-21",
  "topic": "instruments5",
  "prompt": "Which item best avoids a leading, double-barreled question?",
  "options": [
   "How satisfied are you with the delivery speed?",
   "How satisfied are you with our delivery speed and customer support?",
   "How much has our improved delivery service helped you?",
   "How often do you benefit from our dependable delivery?"
  ],
  "answer": 0,
  "explanation": "The neutral item asks about one dimension. Questions that praise the offering or combine speed and price can distort responses and make interpretation difficult."
 },
 {
  "id": "ch5-22",
  "topic": "instruments5",
  "prompt": "Asking repeatedly why a product attribute matters to uncover benefits and core values is…",
  "options": [
   "Brand personification",
   "Laddering",
   "Word association",
   "Visualization"
  ],
  "answer": 1,
  "explanation": "Laddering moves from an attribute through functional and emotional benefits toward deeper values. Follow-up questions should explore the respondent’s meaning rather than force the researcher’s theory."
 },
 {
  "id": "ch5-23",
  "topic": "instruments5",
  "prompt": "Which three questions define a sampling plan?",
  "options": [
   "Whom to survey, what questions to ask, and which results to report",
   "How many to survey, how much to spend, and when to launch",
   "Whom to survey, how many to survey, and how to select them",
   "Which data to collect, how to analyze it, and which recommendation to make"
  ],
  "answer": 2,
  "explanation": "The sampling unit identifies who is studied, sample size specifies how many, and sampling procedure specifies selection. Each affects which inferences the study can reasonably support."
 },
 {
  "id": "ch5-24",
  "topic": "instruments5",
  "prompt": "A survey uses only volunteers following the brand online. What is the key sampling concern?",
  "options": [
   "Random sampling error is the main remaining source of uncertainty",
   "Follower engagement improves representativeness of prospective customers",
   "The follower population’s size matters more than respondent selection",
   "Followers who respond may differ from the full target population"
  ],
  "answer": 3,
  "explanation": "Coverage and self-selection can bias the sample toward engaged customers. More responses from the same limited source do not automatically make it representative of nonfollowers."
 },
 {
  "id": "ch5-25",
  "topic": "evidence5",
  "prompt": "What is a common risk during data collection?",
  "options": [
   "Nonresponse, inaccessible respondents, or biased answers",
   "Forecast error from choosing an unsuitable projection model",
   "A measured association being interpreted as causal",
   "A recommendation becoming outdated after a market change"
  ],
  "answer": 0,
  "explanation": "Collection can fail through missing, uncooperative, or inaccurate responses. Quality procedures matter alongside recruitment volume and the design of the questions."
 },
 {
  "id": "ch5-26",
  "topic": "evidence5",
  "prompt": "A very large survey includes mostly enthusiastic existing customers. Which conclusion is strongest?",
  "options": [
   "More responses reduce selection bias in proportion to population coverage",
   "Large sample size alone does not remove selection bias",
   "Enthusiastic respondents improve external validity through stronger engagement",
   "Selection bias becomes ordinary sampling error with enough observations"
  ],
  "answer": 1,
  "explanation": "A large biased sample can provide a precise picture of the wrong population. Assess who is missing and whether the sample supports the particular decision being made."
 },
 {
  "id": "ch5-27",
  "topic": "evidence5",
  "prompt": "Ice-cream sales and sunburn rise together in summer. What is the best causal interpretation?",
  "options": [
   "Ice-cream sales cause sunburn because purchases precede the reports",
   "Sunburn drives sales because the two outcomes rise together",
   "A common factor such as hot weather may explain both",
   "More observations would establish the causal direction"
  ],
  "answer": 2,
  "explanation": "An association does not isolate a causal effect. Consider shared causes and use an appropriate design before concluding that changing one observed variable will change the other."
 },
 {
  "id": "ch5-28",
  "topic": "evidence5",
  "prompt": "Why use sensitivity analysis when interpreting a business study?",
  "options": [
   "Identify which observations to remove to strengthen the preferred result",
   "Calculate a sample size that eliminates uncertainty from the forecast",
   "Select assumptions that maximize projected returns",
   "Test whether conclusions change under plausible alternative assumptions"
  ],
  "answer": 3,
  "explanation": "Sensitivity analysis examines how robust a conclusion is to uncertain inputs. A recommendation that reverses under small changes deserves more caution than one that remains stable."
 },
 {
  "id": "ch5-29",
  "topic": "evidence5",
  "prompt": "Which statement best describes the researcher–manager relationship?",
  "options": [
   "Research informs the decision, while managers weigh evidence and act",
   "Researchers provide findings but should leave out managerial implications",
   "Researchers determine the action that managers should implement",
   "Researchers resolve contradictory evidence before managers interpret results"
  ],
  "answer": 0,
  "explanation": "Researchers analyze and communicate implications, including limitations. Managers remain responsible for weighing evidence, objectives, resources, and uncertainty in choosing an action."
 },
 {
  "id": "ch5-30",
  "topic": "evidence5",
  "prompt": "A research platform uses AI to code open-ended responses. What is a sound practice?",
  "options": [
   "Validate the reasonableness of labels without reviewing source responses",
   "Validate coding against actual responses and check for error or bias",
   "Treat model confidence as sufficient evidence of correct classification",
   "Replace ambiguous real responses with generated examples fitting the categories"
  ],
  "answer": 1,
  "explanation": "AI can accelerate operational work but may misclassify meaning or invent details. Check a meaningful sample against source responses and preserve traceability to the real evidence."
 },
 {
  "id": "ch5-31",
  "topic": "evidence5",
  "prompt": "An AI model invents survey statistics and references. What has failed?",
  "options": [
   "Sampling precision alone",
   "External validity alone",
   "Data credibility and factual reliability",
   "Measurement consistency alone"
  ],
  "answer": 2,
  "explanation": "Plausible text is not verified research evidence. Fabricated statistics or sources cannot support a marketing decision, even when the report appears confident and polished."
 },
 {
  "id": "ch5-32",
  "topic": "evidence5",
  "prompt": "Which use of customer data best supports trustworthy research?",
  "options": [
   "Protect identities but reuse responses for purposes not explained to participants",
   "Collect accessible data first and decide the research purpose during analysis",
   "Use identifiable quotations when they improve the report’s persuasive effect",
   "Use data with appropriate permission, protect identities, and match use to the stated purpose"
  ],
  "answer": 3,
  "explanation": "Responsible collection and handling support respondent trust and credible research. Choose methods that respect permissions and privacy rather than collecting every possible detail by default."
 },
 {
  "id": "ch5-33",
  "topic": "demand5",
  "prompt": "Which definition best describes market demand?",
  "options": [
   "Total volume bought by a defined customer group, area, period, environment, and marketing program",
   "The company’s expected sales under its current plan",
   "The maximum industry sales attainable under the stated environment",
   "The volume implied by adding the sales quotas of the participating firms"
  ],
  "answer": 0,
  "explanation": "Demand needs a defined scope and conditions. Without specifying the market, period, environment, and marketing assumptions, a demand estimate is difficult to interpret or compare."
 },
 {
  "id": "ch5-34",
  "topic": "demand5",
  "prompt": "How does company demand relate to market demand?",
  "options": [
   "It is the firm’s maximum sales regardless of marketing effort",
   "It is the company’s estimated share at alternative levels of its marketing effort",
   "It is the firm’s assigned sales target within market potential",
   "It is market demand left after competitors serve their buyers"
  ],
  "answer": 1,
  "explanation": "Company demand depends on how the firm competes for the broader market. Its share can change with offering appeal, marketing effectiveness, and competitors’ actions."
 },
 {
  "id": "ch5-35",
  "topic": "demand5",
  "prompt": "Which distinction between a market forecast and market potential is correct?",
  "options": [
   "A forecast measures the upper opportunity; potential estimates likely purchases",
   "A forecast assumes the firm’s plan; market potential equals its sales quota",
   "A forecast is expected demand; potential is the maximum under the stated conditions",
   "Forecast and potential differ only in their monetary versus unit expression"
  ],
  "answer": 2,
  "explanation": "Expected sales under the anticipated environment differ from the market’s upper opportunity under the defined conditions. Neither is an unconditional promise about actual results."
 },
 {
  "id": "ch5-36",
  "topic": "demand5",
  "prompt": "A company sales forecast is best understood as…",
  "options": [
   "Maximum firm sales under sufficiently intensive marketing",
   "The performance target assigned to the sales organization",
   "The conservative volume used for production and cash commitments",
   "Expected sales under a chosen marketing plan and assumed environment"
  ],
  "answer": 3,
  "explanation": "A forecast is conditional on assumptions about the plan and environment. Review those assumptions when execution or market conditions change."
 },
 {
  "id": "ch5-37",
  "topic": "demand5",
  "prompt": "Which comparison among forecast, quota, and sales budget is most accurate?",
  "options": [
   "Forecast estimates sales; quota motivates effort; budget supports operating plans",
   "Forecast motivates effort; quota estimates sales; budget measures maximum demand",
   "Forecast estimates market potential; quota allocates expenses; budget motivates sales effort",
   "Forecast supports operations; quota measures historical sales; budget defines customer demand"
  ],
  "answer": 0,
  "explanation": "The chapter distinguishes an expected-sales estimate from a performance goal and an operating-planning estimate. A quota may stretch effort while a budget can use more conservative assumptions."
 },
 {
  "id": "ch5-38",
  "topic": "demand5",
  "prompt": "A defined market has 2,000 possible buyers, each buying 3 units at ₱500. What is the simplified monetary market potential?",
  "options": [
   "₱1,000,000",
   "₱3,000,000",
   "₱6,000,000",
   "₱1,500,000"
  ],
  "answer": 1,
  "explanation": "Multiply potential buyers by units per buyer and price: 2,000 × 3 × 500 = 3,000,000 pesos. This estimate depends on the stated population, period, quantity, and price assumptions."
 },
 {
  "id": "ch5-39",
  "topic": "demand5",
  "prompt": "A company sells ₱12M in a ₱60M market during the same period. Its value market share is…",
  "options": [
   "25%",
   "16.7%",
   "20%",
   "5%"
  ],
  "answer": 2,
  "explanation": "Use company sales divided by total market sales: 12 ÷ 60 = 0.20, or 20 percent. Numerator and denominator must use comparable periods, scope, and monetary units."
 },
 {
  "id": "ch5-40",
  "topic": "demand5",
  "prompt": "Company sales rise 5% while the comparable market grows 10%. What follows?",
  "options": [
   "Share rises by five percentage points because company sales grew",
   "Share is stable because company and market sales both grew",
   "Share declines by exactly five percentage points",
   "The company loses market share despite growing sales"
  ],
  "answer": 3,
  "explanation": "Share changes by the ratio 1.05 ÷ 1.10, which is below one. Revenue growth alone does not show improved competitive position, and it does not establish profitability."
 },
 {
  "id": "ch5-41",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · A supplier combines salesperson estimates of future orders. Which method is this?",
  "options": [
   "Composite of sales force opinions",
   "Survey of buyer intentions",
   "Pooling of independent external expert estimates",
   "Statistical demand analysis"
  ],
  "answer": 0,
  "explanation": "Sales teams can provide detailed territory and account knowledge. Adjust for optimism, pessimism, incomplete information, or incentives to understate demand for an easier quota."
 },
 {
  "id": "ch5-42",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · A bakery projects next December using prior sales adjusted for trend and recurring holiday peaks. Which method fits?",
  "options": [
   "Statistical demand analysis",
   "Time-series analysis",
   "Sales-force composite",
   "Expert-opinion forecast"
  ],
  "answer": 1,
  "explanation": "Time-series analysis uses patterns in past observations, including trend and seasonality. Structural changes can break those patterns, so historical fit is not a guarantee of future accuracy."
 },
 {
  "id": "ch5-43",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · A service launches in a limited area to observe actual customer response before wider rollout. This is a…",
  "options": [
   "A buyer-intention survey",
   "A sales-force composite",
   "Market test",
   "A historical demand projection"
  ],
  "answer": 2,
  "explanation": "A market test uses observed behavior under a limited launch. Check how well the test area and conditions reflect the intended wider market before extrapolating results."
 },
 {
  "id": "ch5-44",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · Experts revise forecasts over successive rounds using structured feedback. Which method is closest?",
  "options": [
   "One-round expert pooling",
   "Negotiated group forecast",
   "Sales-force composite",
   "Delphi method"
  ],
  "answer": 3,
  "explanation": "The Delphi approach refines expert judgments through repeated rounds and feedback, typically preserving independent responses. It structures judgment rather than turning it into certain knowledge."
 },
 {
  "id": "ch5-45",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · A campaign gains many clicks but few profitable purchases. Which dashboard change is most useful?",
  "options": [
   "Connect engagement with conversion, customer outcomes, and incremental financial results",
   "Use impressions and cost per click as the main economic measures",
   "Attribute all post-exposure revenue to the campaign and compare media spending",
   "Prioritize awareness and defer conversion analysis until the next annual plan"
  ],
  "answer": 0,
  "explanation": "A dashboard should track progress toward the actual objective. Attention can be useful, but conversion and financial measures reveal whether it leads to valuable business outcomes."
 },
 {
  "id": "ch5-46",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · Which set matches the chapter’s dashboard metric categories?",
  "options": [
   "Customer, unit, sales-quota, and operating-budget metrics",
   "Customer, unit, cash-flow, and brand metrics",
   "Customer, channel, campaign, and competitor metrics",
   "Awareness, intention, reach, and frequency metrics"
  ],
  "answer": 1,
  "explanation": "These categories connect customer behavior, product sales, financial return, and longer-term brand effects. Select relevant measures rather than collecting metrics simply because they are available."
 },
 {
  "id": "ch5-47",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · A brand’s share of online searches increases. What is the strongest conclusion?",
  "options": [
   "Search-share growth is preference growth and should be reported as market-share gain",
   "Search growth alone justifies spending expansion before query-intent analysis",
   "It may be an early signal, but purchase outcomes and the full marketing program still need checking",
   "Search interest establishes return because it indicates active demand"
  ],
  "answer": 2,
  "explanation": "Search interest can be informative without being equivalent to sales. Whether attention converts depends on factors such as product fit, pricing, distribution, and the meaning of the searches."
 },
 {
  "id": "ch5-48",
  "topic": "cases5",
  "prompt": "RESEARCH LAB · Six focus-group participants like a new cake, and management predicts 80% national adoption. What should change?",
  "options": [
   "Average enthusiasm across more focus groups to estimate national adoption",
   "Weight the six responses by demographics to create a representative survey",
   "Launch nationally using the group’s percentage as the baseline forecast",
   "Use the group for exploratory insight, then measure demand with an appropriate design"
  ],
  "answer": 3,
  "explanation": "The discussion may reveal appeal and useful language, but it cannot justify a national adoption percentage. Broader measurement and behavioral evidence should match the forecast decision."
 }
];
export const notes = [
 [
  "Research and insight",
  "Marketing research supplies decision-relevant information. An insight explains a pattern and its managerial implications; raw counts and fluent opinions are not enough."
 ],
 [
  "Five-stage research process",
  "Define the problem → develop the research plan → collect information → analyze information → make the decision. The process should serve a specific business question."
 ],
 [
  "Research objectives",
  "Exploratory studies clarify a problem and possible explanations; descriptive studies quantify patterns; causal studies test effects while addressing competing explanations."
 ],
 [
  "Sources and providers",
  "Check relevant secondary data before gathering primary data. Research may be internal or use syndicated, custom-project, or specialist providers; choose on fit, quality, timeliness, and cost."
 ],
 [
  "Five research approaches",
  "Observation, focus groups, surveys, behavioral data, and experiments offer different evidence. Combine methods when their strengths and limitations complement each other."
 ],
 [
  "Questionnaire design",
  "Open-end questions invite respondents’ language; closed-end items structure answers. Distinguish yes/no, Likert agreement, semantic differential, importance, rating, and purchase-intention scales. Pretest wording and sequence."
 ],
 [
  "Qualitative tools",
  "Word association, projective techniques, visualization, personification, and laddering help explore perceptions and motives. Small selected samples do not automatically support population estimates."
 ],
 [
  "Sampling and contact",
  "Specify whom to study, how many, and the selection procedure. Online, in-person, telephone, and email methods differ in reach, cost, response, and bias. More responses cannot automatically repair poor coverage."
 ],
 [
  "Analysis and AI",
  "Check data quality, uncertainty, and alternative explanations. Use sensitivity analysis where assumptions matter. Validate AI outputs against actual evidence and never substitute invented respondents or sources for real research."
 ],
 [
  "Demand and opportunity",
  "Distinguish total market demand from the company’s share. Forecasts describe expected sales under assumptions; potential describes an upper opportunity under stated conditions. Quotas and budgets serve different management purposes."
 ],
 [
  "Forecasting methods",
  "Use buyer intentions, sales force estimates, expert opinion, past-sales analysis, or market tests as appropriate. Compare statements, actual behavior, and historical evidence while recognizing uncertainty and possible structural change."
 ],
 [
  "Metrics and productivity",
  "A useful dashboard connects customer, unit, cash-flow, and brand metrics to objectives. Separate short-term outcomes from longer-term effects and avoid treating clicks, searches, or revenue as automatic proof of incremental profit."
 ]
];
