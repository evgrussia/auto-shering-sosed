# Документация проекта «Авто-Шеринг-Сосед»

Единый каталог документов проекта: описание по категориям и типам со ссылками на файлы.

**Кратко о проекте:** P2P-каршеринг между соседями — сдавай машину, когда не используешь; бери у соседа, когда нужна. Умные замки, верификация через Госуслуги, КАСКО на время аренды. Платформа: Telegram WebApp.

**Источник истины по контексту:** [context/project-brief.yaml](../context/project-brief.yaml)

---

## Оглавление

1. [По категориям](#по-категориям)
2. [По типам документов](#по-типам-документов)
3. [Сводная таблица](#сводная-таблица)

---

## По категориям

### Продукт (Product)

| Документ | Описание | Путь |
|----------|----------|------|
| **Vision** | Миссия, видение на 1–3 года, целевая аудитория, ценностное предложение, отличия от конкурентов, границы продукта | [product/vision.md](product/vision.md) |
| **PRD** | Product Requirements Document: обзор, цели и метрики, роли, функциональные и нефункциональные требования, критерии приёмки MVP | [product/PRD.md](product/PRD.md) |
| **User Stories** | Пользовательские истории по ролям: владелец авто, арендатор, общие/платформа | [product/user-stories.md](product/user-stories.md) |

### Исследования (Research)

| Документ | Описание | Путь |
|----------|----------|------|
| **Анализ конкурентов** | P2P-сегмент, коммерческий каршеринг, сравнительная матрица, выводы для конкурентного преимущества | [research/competitor-analysis.md](research/competitor-analysis.md) |
| **Рынок и регуляторика** | Рынок P2P аренды в РФ, регуляторика, риски для продукта | [research/market-and-regulation.md](research/market-and-regulation.md) |
| **Вендоры умных замков** | Предварительное исследование: Smartcar, направления для РФ, рекомендации для продукта | [research/smart-locks-vendors.md](research/smart-locks-vendors.md) |

### Бизнес (Business)

| Документ | Описание | Путь |
|----------|----------|------|
| **Бизнес-модель** | Canvas, монетизация, unit-экономика (целевая), масштабирование | [business/business-model.md](business/business-model.md) |
| **Стейкхолдеры** | Внутренние, внешние (пользователи), партнёры и регуляторы, косвенные | [business/stakeholders.md](business/stakeholders.md) |
| **Риски** | Реестр рисков: операционные, юридические, технические, рыночные | [business/risks.md](business/risks.md) |

### Аналитика (Analytics)

| Документ | Описание | Путь |
|----------|----------|------|
| **План метрик** | Северная звезда, ключевые метрики, воронка и события, агрегаты, инструменты и хранение | [analytics/metrics-plan.md](analytics/metrics-plan.md) |
| **Unit-экономика** | Модель комиссии, метрики на сделку, целевые ориентиры, издержки, чувствительность | [analytics/unit-economics.md](analytics/unit-economics.md) |

### UX

| Документ | Описание | Путь |
|----------|----------|------|
| **User Flows MVP** | Регистрация и верификация, владелец (добавление авто, заявки), арендатор (поиск и бронирование), арбитраж, интеграция с домовыми чатами | [ux/user-flows-mvp.md](ux/user-flows-mvp.md) |

### Дизайн (Design)

| Документ | Описание | Путь |
|----------|----------|------|
| **Промпты для Figma** | Концепт-промпты: лендинг, онбординг, ЛК, профиль, листинг, поиск, бронирование, умные замки, оплата, рейтинги, арбитраж, сообщения, домовые чаты | [design/figma-concept-prompts.md](design/figma-concept-prompts.md) |

### Discovery и процесс

| Документ | Описание | Путь |
|----------|----------|------|
| **Discovery Roadmap** | План и последовательность фазы Discovery, зависимости, созданные артефакты | [DISCOVERY-ROADMAP.md](DISCOVERY-ROADMAP.md) |

### Контекст и чекпоинты (Context)

| Документ | Описание | Путь |
|----------|----------|------|
| **Project Brief** | Уровень 0: идея, рынок, продукт, платформа, ключевые фичи, scope_decisions, discovery_next | [../context/project-brief.yaml](../context/project-brief.yaml) |
| **Чекпоинт: Discovery** | Снимок состояния после фазы Discovery | [../context/checkpoints/discovery-2025-02-04.yaml](../context/checkpoints/discovery-2025-02-04.yaml) |
| **Чекпоинт: Deploy prep** | Подготовка к деплою (2025-02-05) | [../context/checkpoints/deploy-prep-2025-02-05.yaml](../context/checkpoints/deploy-prep-2025-02-05.yaml) |

### Деплой и инфраструктура (Deploy)

| Документ | Описание | Путь |
|----------|----------|------|
| **Runbook: деплой на VPS** | Деплой frontend через MCP deploy-vps: Git-only, Docker, nginx, домен auto-shering-sosed.ru | [../deploy/RUNBOOK-MCP-DEPLOY.md](../deploy/RUNBOOK-MCP-DEPLOY.md) |
| **Nginx (HTTP+HTTPS)** | Конфиг nginx для auto-shering-sosed.ru с SSL | [../deploy/nginx-auto-shering-sosed.ru.conf](../deploy/nginx-auto-shering-sosed.ru.conf) |
| **Nginx (только HTTP)** | Конфиг nginx без SSL | [../deploy/nginx-auto-shering-sosed.ru-http-only.conf](../deploy/nginx-auto-shering-sosed.ru-http-only.conf) |

### Фронтенд (код и гайдлайны)

| Документ | Описание | Путь |
|----------|----------|------|
| **Guidelines** | Гайдлайны по коду/стилю фронтенда | [../frontend/guidelines/Guidelines.md](../frontend/guidelines/Guidelines.md) |

---

## По типам документов

| Тип | Назначение | Документы |
|-----|------------|-----------|
| **Vision / стратегия** | Цели продукта, границы, успех | [vision.md](product/vision.md) |
| **Требования** | Функциональные и нефункциональные требования, приёмка | [PRD.md](product/PRD.md), [user-stories.md](product/user-stories.md) |
| **Исследования** | Рынок, конкуренты, регуляторика, вендоры | [competitor-analysis.md](research/competitor-analysis.md), [market-and-regulation.md](research/market-and-regulation.md), [smart-locks-vendors.md](research/smart-locks-vendors.md) |
| **Бизнес** | Модель, стейкхолдеры, риски | [business-model.md](business/business-model.md), [stakeholders.md](business/stakeholders.md), [risks.md](business/risks.md) |
| **Аналитика** | Метрики, трекинг, unit-экономика | [metrics-plan.md](analytics/metrics-plan.md), [unit-economics.md](analytics/unit-economics.md) |
| **UX / сценарии** | Пользовательские потоки MVP | [user-flows-mvp.md](ux/user-flows-mvp.md) |
| **Дизайн** | Промпты и концепты для Figma | [figma-concept-prompts.md](design/figma-concept-prompts.md) |
| **Процесс** | Roadmap Discovery | [DISCOVERY-ROADMAP.md](DISCOVERY-ROADMAP.md) |
| **Контекст** | Brief и чекпоинты | [project-brief.yaml](../context/project-brief.yaml), [checkpoints/](../context/checkpoints/) |
| **Операции** | Деплой, nginx, гайдлайны | [RUNBOOK-MCP-DEPLOY.md](../deploy/RUNBOOK-MCP-DEPLOY.md), [Guidelines.md](../frontend/guidelines/Guidelines.md) |

---

## Сводная таблица

| Категория | Файл | Тип |
|-----------|------|-----|
| Product | [product/vision.md](product/vision.md) | Vision |
| Product | [product/PRD.md](product/PRD.md) | Requirements |
| Product | [product/user-stories.md](product/user-stories.md) | Requirements |
| Research | [research/competitor-analysis.md](research/competitor-analysis.md) | Research |
| Research | [research/market-and-regulation.md](research/market-and-regulation.md) | Research |
| Research | [research/smart-locks-vendors.md](research/smart-locks-vendors.md) | Research |
| Business | [business/business-model.md](business/business-model.md) | Business |
| Business | [business/stakeholders.md](business/stakeholders.md) | Business |
| Business | [business/risks.md](business/risks.md) | Business |
| Analytics | [analytics/metrics-plan.md](analytics/metrics-plan.md) | Analytics |
| Analytics | [analytics/unit-economics.md](analytics/unit-economics.md) | Analytics |
| UX | [ux/user-flows-mvp.md](ux/user-flows-mvp.md) | UX |
| Design | [design/figma-concept-prompts.md](design/figma-concept-prompts.md) | Design |
| Process | [DISCOVERY-ROADMAP.md](DISCOVERY-ROADMAP.md) | Process |
| Context | [../context/project-brief.yaml](../context/project-brief.yaml) | Context |
| Context | [../context/checkpoints/](../context/checkpoints/) | Context |
| Deploy | [../deploy/RUNBOOK-MCP-DEPLOY.md](../deploy/RUNBOOK-MCP-DEPLOY.md) | Operations |
| Deploy | [../deploy/nginx-auto-shering-sosed.ru.conf](../deploy/nginx-auto-shering-sosed.ru.conf) | Operations |
| Frontend | [../frontend/guidelines/Guidelines.md](../frontend/guidelines/Guidelines.md) | Operations |

---

*Документ создан: Coder Agent | Дата: 2025-02-05*
