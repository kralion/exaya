# Workflow Rules

## Before Starting Any Task

- Ask clarifying questions first
- Identify which feature is in scope
- Confirm file paths before creating anything

## Iteration Protocol

- Break into small parts: types first → service → query → component
- Confirm with Brayan before moving to next step
- Never deliver full implementations in one shot

## Feature Boundaries

- Work only within the scoped feature unless explicitly told otherwise
- If shared code is needed, flag it — don't create it unilaterally
- Never modify another feature's files during a scoped task

## Single Responsibility

- One component = one job
- If a component grows beyond one responsibility, split it
- Never mix UI logic with business logic in components
