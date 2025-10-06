# CI/CD Demo Application

## Overview

This is a simple Next.js application designed to demonstrate automated CI/CD pipeline stages. The app showcases basic frontend rendering with a client-side component and includes a backend API route. It serves as a template for understanding continuous integration and deployment workflows, including automated linting, testing, building, and deployment preparation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** Next.js 15 with React 19 (App Router)

The application uses Next.js's App Router architecture (introduced in Next.js 13+), which provides:
- File-system based routing in the `app/` directory
- Server Components by default with opt-in Client Components (using `'use client'` directive)
- Built-in metadata API for SEO optimization
- Simplified layout system with nested layouts

The main page (`app/page.js`) is a Client Component that renders a simple UI demonstrating CI/CD pipeline stages. This approach was chosen to enable client-side interactivity (button click to fetch API data) while maintaining the benefits of Next.js's server-side capabilities.

**Styling:** Inline styles are used throughout the application. This lightweight approach was chosen for simplicity in a demo application, avoiding the overhead of CSS modules, Tailwind, or styled-components. For a production application, a more scalable styling solution would be recommended.

### Backend Architecture

**API Routes:** Next.js Route Handlers (App Router pattern)

The backend uses Next.js's Route Handlers located in `app/api/hello/route.js`. This serverless function approach provides:
- Named export functions (GET, POST, etc.) for different HTTP methods
- Automatic API endpoint creation based on file location
- Built-in Response utilities for JSON serialization

The API route returns a mock response structure that mimics CI/CD pipeline status, making it useful for testing and demonstration purposes.

### Testing Strategy

**Framework:** Jest with React Testing Library

The testing setup includes:
- Jest configured for Next.js using `next/jest` for optimal compatibility
- jsdom environment for simulating browser DOM
- Path alias mapping (`@/`) matching the Next.js configuration
- Basic API structure testing (not full integration testing)

The current test (`__tests__/api.test.js`) validates the expected response structure rather than testing the actual API endpoint. This approach was chosen for simplicity, but a full testing strategy would include integration tests using tools like MSW (Mock Service Worker) or supertest.

**Trade-off:** The test suite is minimal and focuses on contract testing (structure validation) rather than behavior testing. This provides quick validation but may miss runtime issues.

### Code Quality

**Linting:** ESLint with Next.js recommended configuration

The project uses `eslint-config-next` which includes:
- React best practices and hooks rules
- Next.js specific rules (e.g., Image optimization, Link usage)
- Core Web Vitals checks

This zero-configuration approach was chosen to maintain consistency with Next.js standards while minimizing setup complexity.

### Build and Development

**Development Server:** Runs on port 5000 (configured via `-p` flag)

**Build Process:** Next.js's production build with:
- Automatic code splitting
- Static page generation where possible
- Server-side rendering for dynamic content
- API routes compiled as serverless functions

The custom port (5000 instead of default 3000) suggests deployment or development environment constraints.

### CI/CD Pipeline

**GitHub Actions Workflow:** `.github/workflows/ci-cd.yml`

The automated CI/CD pipeline includes four stages:
1. **Lint Stage:** Runs ESLint to check code quality
2. **Test Stage:** Executes Jest test suite
3. **Build Stage:** Creates production build (requires lint and test to pass)
4. **Deploy Stage:** Placeholder for deployment (only runs on main branch)

All stages have been tested and verified to run successfully:
- Lint: ✓ No ESLint warnings or errors
- Test: ✓ 1 passed test
- Build: ✓ Successfully compiled

## External Dependencies

### Core Framework
- **Next.js 15.5.4** - React meta-framework providing SSR, SSG, API routes, and routing
- **React 19.2.0 & React DOM 19.2.0** - UI library and renderer

### Testing & Quality Assurance
- **Jest 30.2.0** - JavaScript testing framework
- **jest-environment-jsdom 30.2.0** - DOM simulation for component testing
- **@testing-library/react 16.3.0** - React component testing utilities
- **@testing-library/jest-dom 6.9.1** - Custom Jest matchers for DOM assertions
- **ESLint 9.37.0** - JavaScript/TypeScript linter
- **eslint-config-next 15.5.4** - Next.js specific ESLint configuration

### Runtime Environment
- **Node.js 20** - Required for Next.js server-side execution and build processes
- No external database or persistent storage
- No third-party API integrations
- No authentication or authorization services

### Notable Absences
- No database layer (no Prisma, Drizzle, or direct database drivers)
- No state management library (Redux, Zustand, etc.)
- No UI component library (Material-UI, Chakra, etc.)
- No deployment configuration files (Vercel, Docker, etc.) - though the app structure is deployment-ready
- No environment variable configuration files (suggests all configuration is either default or handled externally)

The application is intentionally minimal, focusing on demonstrating CI/CD pipeline integration rather than complex application features.

## Recent Changes (October 6, 2025)

- Initial project setup with Next.js 15 and React 19
- Created simple API route at `/api/hello` demonstrating backend functionality
- Configured ESLint for automated code quality checks
- Set up Jest testing framework with basic test coverage
- Created GitHub Actions workflow demonstrating CI/CD pipeline stages
- Configured development workflow running on port 5000
- All CI/CD stages (lint, test, build) verified and working correctly
