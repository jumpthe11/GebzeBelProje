# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a full-stack municipal website and administration system for Kocaeli Belediyesi (Kocaeli Municipality), built with:
- **Backend**: Java Spring Boot with Oracle database
- **Frontend**: React with TypeScript, Vite, and Tailwind CSS
- **Authentication**: JWT-based with role-based permissions

## Development Commands

### Backend (Spring Boot)
```bash
# Build and run the Spring Boot application
mvn clean install
mvn spring-boot:run

# Run tests (from project root)
mvn test

# Clean build
mvn clean compile

# Package without tests
mvn package -DskipTests
```

### Frontend (React)
```bash
# Navigate to frontend directory first
cd MEGAFrontEnd/ReactFront/react

# Install dependencies
npm install

# Development server (includes Tailwind CSS watch)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Architecture

### Backend Structure
- **Base Package**: `com.kocaeli.bel`
- **Layered Architecture**: Controller → Service → Repository → Entity
- **Database**: Oracle with HikariCP connection pooling
- **Security**: JWT authentication with Spring Security
- **Key Directories**:
  - `controller/`: REST API endpoints organized by domain (kurumsal, gebze, hizmetler, etc.)
  - `model/`: JPA entities with domain-specific packages
  - `repository/`: Spring Data JPA repositories
  - `service/`: Business logic layer
  - `config/`: Configuration classes (Hibernate, Security)
  - `DTO/`: Data Transfer Objects for API requests/responses

### Frontend Structure
- **Framework**: React 19 with TypeScript and Vite
- **Styling**: Tailwind CSS with concurrent build process
- **Routing**: React Router with nested layouts
- **State**: Zustand for state management
- **API**: TanStack Query for server state management
- **Key Components**:
  - Domain-specific apps: `KurumsalApp`, `HizmetlerApp`, `GebzeApp`
  - Layouts for consistent page structure
  - Admin panel with separate routing

### Domain Organization
The system is organized around municipal domains:
- **Kurumsal** (Corporate): Mayor info, mission, vision, principles
- **Gebze**: District-specific content (history, activities, galleries)
- **Hizmetler** (Services): Municipal services and recycling information
- **Etkinlikler** (Events): Municipal events and activities
- **Haberler** (News): News articles and announcements
- **Duyurular** (Announcements): Official announcements

## Database Configuration

### Connection Setup
The application uses Oracle database with these key configurations:
- **Dialect**: OracleDialect/Oracle12cDialect
- **Connection Pool**: HikariCP with max 10 connections
- **DDL Mode**: `update` (creates/updates tables automatically)
- **Configuration Files**:
  - `application.properties`: Basic connection settings
  - `HibernateConfig.java`: Advanced Hibernate configuration

### Database Export/Import
```bash
# Export database (Oracle)
expdp USERNAME/PASSWORD@localhost:1521/FREE schemas=USERNAME directory=EXPORT_DIR dumpfile=backup.dmp logfile=backup.log

# Import database
impdp USERNAME/PASSWORD@localhost:1521/FREE schemas=USERNAME directory=EXPORT_DIR dumpfile=backup.dmp logfile=import.log
```

## API Structure

### Authentication Endpoints
- `POST /api/auth/login` - User authentication with JWT
- `POST /api/auth/register` - User registration

### Domain Endpoints Pattern
- `/api/kurumsal/*` - Corporate content management
- `/api/gebze/*` - Gebze district content
- `/api/hizmetler/*` - Municipal services
- `/api/etkinlik/*` - Events management

### Permission System
- User permissions stored as JSON in database
- Role-based access control throughout the application
- Default permissions defined in `PermissionService.java`

## Development Environment

### Required Software
- **Java 23** (configured in pom.xml)
- **Maven 3.6+**
- **Node.js 18+**
- **Oracle Database** (configured for Oracle Free)

### Port Configuration
- **Backend**: http://localhost:8080 (Spring Boot default)
- **Frontend**: http://localhost:5173 (Vite default)
- **Database**: localhost:1521/FREE (Oracle)

### CORS Configuration
Frontend allowed origins configured in `SecurityConfig.java`:
- Development: `http://localhost:5173`

## Testing Strategy

### Backend Testing
- JUnit 5 configured for unit tests
- Spring Boot Test for integration tests
- Separate test profiles can be configured in `application-test.properties`

### Frontend Testing
- ESLint configured for code quality
- TypeScript strict mode enabled

## Key Implementation Details

### JWT Authentication Flow
1. User credentials sent to `/api/auth/login`
2. Spring Security validates credentials
3. JWT token generated with user permissions
4. Token used for subsequent API calls via `JwtAuthenticationFilter`

### Frontend Routing Strategy
- Nested routing with layout components
- Domain-specific route grouping
- Admin panel isolated with separate routing tree

### Database Entity Relationships
- Entities organized by domain in separate packages
- JPA relationships configured between related entities
- Soft delete patterns implemented where needed

## Known Issues and TODOs

### Backend Incomplete Features
- Several domain controllers missing full CRUD operations
- URL routing is currently static, needs to be made dynamic
- Missing categories: YAYINLAR, ETKİNLİKLER, HABERLER, DUYURULAR, İLETİŞİM

### Database Considerations
- `hibernate.hbm2ddl.auto=update` should be changed to `validate` in production
- Database credentials are hardcoded in configuration files
- Consider using environment variables for sensitive configuration

### Frontend Architecture
- Some domain apps could benefit from better component organization
- Admin panel styles need improvement
- Consider implementing proper error boundaries

## Development Workflow

When working with this codebase:
1. Always start the backend first (`mvn spring-boot:run`)
2. Start frontend development server (`npm run dev`)
3. Database must be running and accessible
4. Check CORS settings if experiencing cross-origin issues
5. Monitor console logs for SQL queries and errors (enabled by default)