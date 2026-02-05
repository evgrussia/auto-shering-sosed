---
title: "Discovery Roadmap — Авто-Шеринг-Сосед"
created_by: Orchestrator Agent
created_at: "2025-02-04"
---

# Discovery Roadmap

Порядок создания документов фазы Discovery и зависимости между ними.

## Последовательность

| # | Этап | Артефакты | Ответственный |
|---|------|-----------|---------------|
| 1 | **Исследование** | Конкуренты, рынок, вендоры умных замков, регуляторика | Research Agent |
| 2 | **Продукт** | Vision, PRD, User Stories (с учётом выводов исследования) | Product Agent |
| 3 | **Бизнес** | Бизнес-модель, стейкхолдеры, риски | Business-Analyst Agent |
| 4 | **Аналитика** | План метрик, unit-экономика | Analytics Agent |
| 5 | **UX** | User flows MVP, сценарии бронирования и арбитража | UX Agent |

## Зависимости

- **Product** опирается на **Research** (конкурентные преимущества, ограничения рынка).
- **Business** опирается на **Product** (scope, ценность) и **Research** (риски, регуляторика).
- **Analytics** опирается на **Product** (воронка, события).
- **UX** опирается на **Product** (MVP, user stories).

## Созданные артефакты

- [x] research/competitor-analysis.md
- [x] research/market-and-regulation.md
- [x] research/smart-locks-vendors.md
- [x] product/vision.md
- [x] product/PRD.md
- [x] product/user-stories.md
- [x] business/business-model.md
- [x] business/stakeholders.md
- [x] business/risks.md
- [x] analytics/metrics-plan.md
- [x] analytics/unit-economics.md
- [x] ux/user-flows-mvp.md

---
*Документ создан: Orchestrator Agent | Дата: 2025-02-04*
