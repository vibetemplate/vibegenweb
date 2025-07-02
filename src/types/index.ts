// User Types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description?: string;
  type: ProjectType;
  status: ProjectStatus;
  prd?: PRD;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectType = 
  | 'blog' 
  | 'ecommerce' 
  | 'saas' 
  | 'portfolio' 
  | 'landing_page' 
  | 'generic';

export type ProjectStatus = 
  | 'draft' 
  | 'planning' 
  | 'building' 
  | 'completed' 
  | 'error';

// PRD (Product Requirements Document) Types
export interface PRD {
  projectName: string;
  projectType: ProjectType;
  description: string;
  techStack: TechStack;
  features: Feature[];
  config: ProjectConfig;
  metadata: PRDMetadata;
}

export interface TechStack {
  frontend: string;
  backend?: string;
  database?: string;
  styling: string;
  authentication?: string;
  payment?: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  required: boolean;
  config?: Record<string, any>;
}

export interface ProjectConfig {
  env: Record<string, string>;
  dependencies: string[];
  devDependencies?: string[];
}

export interface PRDMetadata {
  version: string;
  createdAt: Date;
  updatedAt: Date;
  generatedBy: string;
}

// Template Types
export interface Template {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  techStack: TechStack;
  features: string[];
  preview?: string;
  downloads: number;
  rating: number;
  createdAt: Date;
}

// Authentication Types
export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}