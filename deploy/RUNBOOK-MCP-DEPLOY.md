# Runbook: деплой frontend auto-shering-sosed на VPS через MCP deploy-vps

**Домен:** auto-shering-sosed.ru  
**Порт приложения на хосте:** 8091  
**Сервер:** default (213.159.67.199), Ubuntu, nginx + Certbot.

## Предусловия

- Репозиторий запушен в GitHub (или другой remote).
- На VPS настроен SSH-доступ (MCP user-deploy-vps, connection: default).
- На сервере установлены: Docker, Docker Compose, nginx, certbot.

## Стратегия (по результатам разведки 2025-02-05)

| Ресурс        | Значение |
|---------------|----------|
| Свободный порт | **8091** (не занят другими проектами) |
| Занятые порты | 80, 443, 8082–8090, 8010, 8001, 3000, 8000 и др. |
| Nginx         | sites-enabled: множество сайтов, прокси на localhost |
| SSL           | Certbot (Let's Encrypt), конфиги в sites-available |

## Шаги деплоя (только через Git)

### 1. Локально: коммит и push

```bash
git add .
git commit -m "chore: Docker + deploy config for auto-shering-sosed.ru"
git push origin main
```

### 2. На VPS: клонировать или обновить репо

Через MCP `execute-command`:

```bash
# Если проект ещё не клонирован (подставить URL репо):
# git clone https://github.com/YOUR_ORG/auto-shering-sosed.git /opt/auto-shering-sosed
# cd /opt/auto-shering-sosed

# Если уже есть:
cd /opt/auto-shering-sosed   # или путь, где лежит проект
git pull origin main
```

### 3. На VPS: сборка и запуск контейнера

```bash
cd /opt/auto-shering-sosed
docker compose up -d --build
docker compose ps
```

Проверка: `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8091/` → 200.

### 4. На VPS: nginx (сначала только HTTP)

Файлы проекта на сервер **только через Git** (уже в репо после pull). Сначала ставим HTTP-only конфиг (чтобы certbot мог выдать сертификат):

```bash
sudo cp /opt/auto-shering-sosed/deploy/nginx-auto-shering-sosed.ru-http-only.conf /etc/nginx/sites-available/auto-shering-sosed.ru
sudo ln -sf /etc/nginx/sites-available/auto-shering-sosed.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 5. На VPS: SSL (Certbot)

```bash
sudo certbot --nginx -d auto-shering-sosed.ru -d www.auto-shering-sosed.ru
```

Certbot сам добавит редирект HTTP→HTTPS и при необходимости обновит конфиг. Если нужен полный конфиг с заголовками безопасности и логами — после certbot подменить конфиг на полный:

```bash
sudo cp /opt/auto-shering-sosed/deploy/nginx-auto-shering-sosed.ru.conf /etc/nginx/sites-available/auto-shering-sosed.ru
sudo nginx -t && sudo systemctl reload nginx
```

### 6. Верификация

- В браузере: https://auto-shering-sosed.ru
- Локально на сервере: `curl -sI https://auto-shering-sosed.ru`

## MCP deploy-vps: какие инструменты использовать

| Действие           | Инструмент MCP      | Комментарий |
|--------------------|---------------------|-------------|
| Список серверов    | `list-servers`      | Узнать connection name (default) |
| Команды на VPS     | `execute-command`   | Все шаги 2–6 |
| Скачать логи/файлы | `download`          | При необходимости |
| Загрузка файлов   | **Не использовать** для файлов проекта — только Git |

## Откат (rollback)

```bash
cd /opt/auto-shering-sosed
git checkout HEAD~1   # или нужный коммит
docker compose up -d --build
# При необходимости откатить nginx: удалить симлинк, вернуть старый конфиг, reload nginx
```

---
*Документ создан: Orchestrator Agent | Дата: 2025-02-05*
