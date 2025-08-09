# Moeed's Portfolio Website

## Overview

This is a full-stack portfolio website showcasing Moeed's work as a full-stack developer and product builder. The application features a modern, responsive design built with React and TypeScript on the frontend, and Express.js with TypeScript on the backend. The site includes sections for hero introduction, skills showcase, project portfolio, about information, experience timeline, and a contact form. The architecture follows a monorepo structure with shared components and schema validation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **Development Server**: Custom Vite integration for hot reloading and development experience
- **Middleware**: Custom logging middleware for API request tracking and debugging
- **Error Handling**: Centralized error handling middleware with status code management

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Schema**: Shared schema definitions between frontend and backend using Zod for validation
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage

### Database Schema
- **Contact Messages**: Table for storing contact form submissions with fields for name, email, message, and timestamps
- **Validation**: Zod schemas for runtime type checking and API validation
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Development and Build Process
- **Build Tool**: Vite for frontend building with React plugin and runtime error overlay
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Code Quality**: ESNext target with bundler module resolution
- **Development**: Hot module replacement and file system restrictions for security

### Project Structure
- **Monorepo**: Client, server, and shared code in organized directories
- **Path Aliases**: Clean import paths using @ prefixes for components, utils, and shared code
- **Asset Management**: Centralized asset handling with Vite configuration
- **Environment**: Separate development and production configurations

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Neon database connection for PostgreSQL
- **drizzle-orm** and **drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for React applications

### UI and Design
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Modern icon library for consistent iconography

### Development Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development environment integration

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Resolvers for external validation libraries
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Utilities
- **date-fns**: Modern date utility library
- **clsx** and **tailwind-merge**: Utility functions for conditional CSS classes
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component for enhanced user experience