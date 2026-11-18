# Tadabeer

 A RESTful API for tracking expenses, managing budget categories, and generating financial reports. Built with Node.js, Express, TypeScript, MongoDB, and Redis.

## Features

- **Authentication:** JWT-based access and refresh token flow.
- **Expense & Budget Management:** Track spending across custom categories.
- **Recurring Expenses:** A daily cron job automatically generates expenses that are set up to recur.
- **Budget Alerts:** Spending is checked against budget thresholds in real time whenever an expense is created or updated.
- **Reporting:** Generate monthly and category-based spending summaries.
- **Caching & Security:** Redis-backed rate limiting to prevent abuse.
- **Validation:** Strict runtime type safety and request validation.
- **Documentation:** Interactive Swagger UI.
## Tech Stack

- **Core:** Node.js, Express, TypeScript
- **Database:** MongoDB (Mongoose)
- **Caching & Rate Limiting:** Redis
- **Validation:** Zod
- **Testing:** Vitest
## Project Structure

```text
tadabeer-backend/
├── src/
│   ├── config/             
│   ├── helpers/            
│   ├── jobs/               
│   ├── middlewares/        
│   ├── modules/
│   │   ├── auth/           
│   │   ├── budgetAlert/    
│   │   ├── categories/     
│   │   ├── expenses/       
│   │   ├── reports/        
│   │   └── users/          
│   ├── types/              
│   ├── utils/              
│   ├── app.ts              
│   └── server.ts           
├── tests/                  
├── Dockerfile
├── compose.yaml
└── vitest.config.ts
```

*Note: Each directory in `src/modules` follows the same pattern: `*.controller.ts` handles HTTP requests and responses, `*.service.ts` holds business logic, `*.routes.ts` defines endpoints, `*.model.ts` is the Mongoose schema, `*.validation.ts` holds Zod schemas, `*.types.ts` holds TypeScript types, and `*.docs.ts` contains Swagger documentation definitions.*

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB (Atlas or local)
- Redis
- Docker (optional)
### Installation

1. Clone the repository:
```bash
   git clone https://github.com/karraraljawasim/tadabeer-backend.git
   cd tadabeer-backend
```

2. Install dependencies:
```bash
   pnpm install
```

3. Environment Setup:
   Copy the example environment file and fill in your values.
```bash
   cp .env.example .env.development.local
```

4. Run the development server:
```bash
   pnpm dev
```
The server starts on `http://localhost:8080`.

## Running with Docker

The project supports MongoDB Atlas (default) or a local MongoDB container.

**Atlas:**
```bash
docker compose up --build
```

**Local MongoDB:**
```bash
docker compose --profile local-db up --build
```
*Set `DB_URL` in `.env.development.local` to `mongodb://mongo:27017/tadabeer_backend`.*

## Troubleshooting

**MongoDB `querySrv ECONNREFUSED`:** some networks block the DNS SRV lookup used by `mongodb+srv://` connection strings. If you hit this, use the non-SRV connection string instead in Atlas, choose the standard driver connection string with the shard hosts listed directly (see `.env.example`), rather than the `mongodb+srv://` one.


##  API Documentation

```text
http://localhost:8080/api-docs
```

## Testing

```bash
pnpm test
```