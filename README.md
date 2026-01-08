# SmartPrompt

A production-ready Angular 21 application with standalone components, lazy loading, and HTTP infrastructure.

## Project Structure

```
src/
├── app/
│   ├── app-layout.component.ts    # Main layout with navbar and router-outlet
│   ├── app.config.ts               # Application configuration
│   ├── app.routes.ts               # Route definitions
│   ├── app.ts                      # Root component
│   └── app.spec.ts                 # Root component tests
├── core/
│   ├── config/
│   │   └── api.config.ts           # API configuration token
│   ├── guards/
│   │   └── example.guard.ts        # Example route guard
│   ├── interceptors/
│   │   └── example.interceptor.ts  # HTTP interceptor for API base URL
│   └── services/
│       └── example.service.ts      # Example HTTP service
├── shared/
│   ├── components/                 # Shared UI components
│   ├── directives/
│   │   └── highlight.directive.ts  # Example directive
│   └── pipes/
│       └── capitalize.pipe.ts      # Example pipe
├── features/
│   └── home/
│       ├── home.component.ts       # Home feature component
│       └── home.routes.ts          # Home feature routes
└── environments/
    ├── environment.ts              # Development environment
    └── environment.prod.ts         # Production environment
```

## Features

- ✅ **Angular 21** with standalone components
- ✅ **Lazy Loading** via route-level `loadChildren`
- ✅ **HTTP Infrastructure** with API base URL configuration and interceptor
- ✅ **Responsive Layout** with mobile-friendly navbar
- ✅ **ESLint & Prettier** configured
- ✅ **Environment-based Configuration**
- ✅ **Production Build** optimized

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## Configuration

### API Base URL

The API base URL is configured in environment files:

- **Development**: `src/environments/environment.ts` → `http://localhost:3000/api`
- **Production**: `src/environments/environment.prod.ts` → `/api`

The HTTP interceptor automatically prefixes all relative API requests with this base URL.

## Architecture

### Standalone Components

All components are standalone (no NgModules):

```typescript
@Component({
  selector: 'sp-home',
  standalone: true,
  imports: [/* dependencies */],
  template: `...`
})
export class HomeComponent {}
```

### Lazy Loading

Routes are lazy-loaded for optimal performance:

```typescript
{
  path: 'home',
  loadChildren: () => import('../features/home/home.routes').then(m => m.homeRoutes)
}
```

### HTTP Interceptor

The API interceptor automatically prefixes relative URLs with the configured API base URL:

```typescript
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiConfig = inject(API_CONFIG);
  // Prefix relative URLs with apiBaseUrl
  ...
};
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Adding Features

### Create a New Feature

1. Create feature folder: `src/features/my-feature/`
2. Create component: `my-feature.component.ts`
3. Create routes: `my-feature.routes.ts`
4. Add lazy route in `app.routes.ts`

### Create a Shared Component

1. Create component in `src/shared/components/`
2. Make it standalone with `standalone: true`
3. Import and use in feature components

## License

Private
