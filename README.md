# Авто-Шеринг-Сосед

Единый каталог документов проекта: описание по категориям и типам со ссылками на файлы.

**Кратко о проекте:** P2P-каршеринг между соседями — сдавай машину, когда не используешь; бери у соседа, когда нужна. Умные замки, верификация через Госуслуги, КАСКО на время аренды. Платформа: Telegram WebApp.

**Источник истины по контексту:** [context/project-brief.yaml](context/project-brief.yaml)

**Полный каталог документации:** [docs/README.md](docs/README.md)

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
| **Vision** | Миссия, видение на 1–3 года, целевая аудитория, ценностное предложение, отличия от конкурентов, границы продукта | [docs/product/vision.md](docs/product/vision.md) |
| **PRD** | Product Requirements Document: обзор, цели и метрики, роли, функциональные и нефункциональные требования, критерии приёмки MVP | [docs/product/PRD.md](docs/product/PRD.md) |
| **User Stories** | Пользовательские истории по ролям: владелец авто, арендатор, общие/платформа | [docs/product/user-stories.md](docs/product/user-stories.md) |

### Исследования (Research)

| Документ | Описание | Путь |
|----------|----------|------|
| **Анализ конкурентов** | P2P-сегмент, коммерческий каршеринг, сравнительная матрица, выводы для конкурентного преимущества | [docs/research/competitor-analysis.md](docs/research/competitor-analysis.md) |
| **Рынок и регуляторика** | Рынок P2P аренды в РФ, регуляторика, риски для продукта | [docs/research/market-and-regulation.md](docs/research/market-and-regulation.md) |
| **Вендоры умных замков** | Предварительное исследование: Smartcar, направления для РФ, рекомендации для продукта | [docs/research/smart-locks-vendors.md](docs/research/smart-locks-vendors.md) |

### Бизнес (Business)

| Документ | Описание | Путь |
|----------|----------|------|
| **Бизнес-модель** | Canvas, монетизация, unit-экономика (целевая), масштабирование | [docs/business/business-model.md](docs/business/business-model.md) |
| **Стейкхолдеры** | Внутренние, внешние (пользователи), партнёры и регуляторы, косвенные | [docs/business/stakeholders.md](docs/business/stakeholders.md) |
| **Риски** | Реестр рисков: операционные, юридические, технические, рыночные | [docs/business/risks.md](docs/business/risks.md) |

### Аналитика (Analytics)

| Документ | Описание | Путь |
|----------|----------|------|
| **План метрик** | Северная звезда, ключевые метрики, воронка и события, агрегаты, инструменты и хранение | [docs/analytics/metrics-plan.md](docs/analytics/metrics-plan.md) |
| **Unit-экономика** | Модель комиссии, метрики на сделку, целевые ориентиры, издержки, чувствительность | [docs/analytics/unit-economics.md](docs/analytics/unit-economics.md) |

### UX

| Документ | Описание | Путь |
|----------|----------|------|
| **User Flows MVP** | Регистрация и верификация, владелец (добавление авто, заявки), арендатор (поиск и бронирование), арбитраж, интеграция с домовыми чатами | [docs/ux/user-flows-mvp.md](docs/ux/user-flows-mvp.md) |

### Дизайн (Design)

| Документ | Описание | Путь |
|----------|----------|------|
| **Промпты для Figma** | Концепт-промпты: лендинг, онбординг, ЛК, профиль, листинг, поиск, бронирование, умные замки, оплата, рейтинги, арбитраж, сообщения, домовые чаты | [docs/design/figma-concept-prompts.md](docs/design/figma-concept-prompts.md) |

### Discovery и процесс

| Документ | Описание | Путь |
|----------|----------|------|
| **Discovery Roadmap** | План и последовательность фазы Discovery, зависимости, созданные артефакты | [docs/DISCOVERY-ROADMAP.md](docs/DISCOVERY-ROADMAP.md) |

### Контекст и чекпоинты (Context)

| Документ | Описание | Путь |
|----------|----------|------|
| **Project Brief** | Уровень 0: идея, рынок, продукт, платформа, ключевые фичи, scope_decisions, discovery_next | [context/project-brief.yaml](context/project-brief.yaml) |
| **Чекпоинт: Discovery** | Снимок состояния после фазы Discovery | [context/checkpoints/discovery-2025-02-04.yaml](context/checkpoints/discovery-2025-02-04.yaml) |
| **Чекпоинт: Deploy prep** | Подготовка к деплою (2025-02-05) | [context/checkpoints/deploy-prep-2025-02-05.yaml](context/checkpoints/deploy-prep-2025-02-05.yaml) |

### Деплой и инфраструктура (Deploy)

| Документ | Описание | Путь |
|----------|----------|------|
| **Runbook: деплой на VPS** | Деплой frontend через MCP deploy-vps: Git-only, Docker, nginx, домен auto-shering-sosed.ru | [deploy/RUNBOOK-MCP-DEPLOY.md](deploy/RUNBOOK-MCP-DEPLOY.md) |
| **Nginx (HTTP+HTTPS)** | Конфиг nginx для auto-shering-sosed.ru с SSL | [deploy/nginx-auto-shering-sosed.ru.conf](deploy/nginx-auto-shering-sosed.ru.conf) |
| **Nginx (только HTTP)** | Конфиг nginx без SSL | [deploy/nginx-auto-shering-sosed.ru-http-only.conf](deploy/nginx-auto-shering-sosed.ru-http-only.conf) |

### Фронтенд (код и гайдлайны)

| Документ | Описание | Путь |
|----------|----------|------|
| **Guidelines** | Гайдлайны по коду/стилю фронтенда | [frontend/guidelines/Guidelines.md](frontend/guidelines/Guidelines.md) |

---

## По типам документов

| Тип | Назначение | Документы |
|-----|------------|-----------|
| **Vision / стратегия** | Цели продукта, границы, успех | [vision.md](docs/product/vision.md) |
| **Требования** | Функциональные и нефункциональные требования, приёмка | [PRD.md](docs/product/PRD.md), [user-stories.md](docs/product/user-stories.md) |
| **Исследования** | Рынок, конкуренты, регуляторика, вендоры | [competitor-analysis.md](docs/research/competitor-analysis.md), [market-and-regulation.md](docs/research/market-and-regulation.md), [smart-locks-vendors.md](docs/research/smart-locks-vendors.md) |
| **Бизнес** | Модель, стейкхолдеры, риски | [business-model.md](docs/business/business-model.md), [stakeholders.md](docs/business/stakeholders.md), [risks.md](docs/business/risks.md) |
| **Аналитика** | Метрики, трекинг, unit-экономика | [metrics-plan.md](docs/analytics/metrics-plan.md), [unit-economics.md](docs/analytics/unit-economics.md) |
| **UX / сценарии** | Пользовательские потоки MVP | [user-flows-mvp.md](docs/ux/user-flows-mvp.md) |
| **Дизайн** | Промпты и концепты для Figma | [figma-concept-prompts.md](docs/design/figma-concept-prompts.md) |
| **Процесс** | Roadmap Discovery | [DISCOVERY-ROADMAP.md](docs/DISCOVERY-ROADMAP.md) |
| **Контекст** | Brief и чекпоинты | [project-brief.yaml](context/project-brief.yaml), [checkpoints/](context/checkpoints/) |
| **Операции** | Деплой, nginx, гайдлайны | [RUNBOOK-MCP-DEPLOY.md](deploy/RUNBOOK-MCP-DEPLOY.md), [Guidelines.md](frontend/guidelines/Guidelines.md) |

---

## Сводная таблица

| Категория | Файл | Тип |
|-----------|------|-----|
| Product | [docs/product/vision.md](docs/product/vision.md) | Vision |
| Product | [docs/product/PRD.md](docs/product/PRD.md) | Requirements |
| Product | [docs/product/user-stories.md](docs/product/user-stories.md) | Requirements |
| Research | [docs/research/competitor-analysis.md](docs/research/competitor-analysis.md) | Research |
| Research | [docs/research/market-and-regulation.md](docs/research/market-and-regulation.md) | Research |
| Research | [docs/research/smart-locks-vendors.md](docs/research/smart-locks-vendors.md) | Research |
| Business | [docs/business/business-model.md](docs/business/business-model.md) | Business |
| Business | [docs/business/stakeholders.md](docs/business/stakeholders.md) | Business |
| Business | [docs/business/risks.md](docs/business/risks.md) | Business |
| Analytics | [docs/analytics/metrics-plan.md](docs/analytics/metrics-plan.md) | Analytics |
| Analytics | [docs/analytics/unit-economics.md](docs/analytics/unit-economics.md) | Analytics |
| UX | [docs/ux/user-flows-mvp.md](docs/ux/user-flows-mvp.md) | UX |
| Design | [docs/design/figma-concept-prompts.md](docs/design/figma-concept-prompts.md) | Design |
| Process | [docs/DISCOVERY-ROADMAP.md](docs/DISCOVERY-ROADMAP.md) | Process |
| Context | [context/project-brief.yaml](context/project-brief.yaml) | Context |
| Context | [context/checkpoints/](context/checkpoints/) | Context |
| Deploy | [deploy/RUNBOOK-MCP-DEPLOY.md](deploy/RUNBOOK-MCP-DEPLOY.md) | Operations |
| Deploy | [deploy/nginx-auto-shering-sosed.ru.conf](deploy/nginx-auto-shering-sosed.ru.conf) | Operations |
| Frontend | [frontend/guidelines/Guidelines.md](frontend/guidelines/Guidelines.md) | Operations |
