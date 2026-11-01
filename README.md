# ThreadyGo

A self-contained, responsive ThreadyGo Reddit growth workspace plus a local-first Automation Studio. The original multi-page UI is preserved; open the orange **Automation Studio** button to access the workflow demo.

## Run locally

Requires Node.js 18+ and Python 3.

```bash
npm run build
npm run dev
```

Open <http://localhost:4173>. There are no npm dependencies or frontend build tool; `npm run build` checks the static app files and Vercel serves them directly.

## Deploy from GitHub to Vercel

1. Push this repository to GitHub (or push this branch to the connected repository).
2. In Vercel, choose **Add New → Project**, import the GitHub repository, and select the branch you want to deploy.
3. Vercel reads `vercel.json`: the build command is `npm run build`, and the static output directory is the repository root (`.`).
4. Click **Deploy**. Later pushes to the selected branch trigger deployments automatically.

No environment variables are needed for this static demo. To deploy a different branch, select it in Vercel Project → Settings → Git.

## Automation Studio features

- Sample thread discovery with deduplication, configurable community/keyword rules, and repeatable scan history
- Explainable opportunity score based on relevance, freshness, activity, community fit, and configured risk phrases
- Opportunity inbox with score threshold, status filter, research/draft/review/approve workflow, team assignment, and dismissal
- Local draft helper, editable draft text, clipboard copy, and a human approval gate
- Safety checklist and editable brand context; no automatic posting
- Workflow report with CSV export and status counts
- Demo settings for Slack, CRM, and email integration concepts
- Browser-local persistence via `localStorage`

## Scope and safety

The scan uses bundled sample threads only. The app does **not** connect to Reddit, an AI model, Slack, a CRM, email, or payment provider, and it does not publish comments. Draft generation is a local template, not an AI call. Real monitoring, AI drafting, external integrations, and analytics require a backend, authorized data/provider access, and secure credential handling. Review subreddit rules and disclose affiliation before posting manually.
