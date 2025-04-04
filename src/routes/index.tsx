import { lazy, ReactNode } from 'react';
import { RouteObject as ReactRouteObject } from 'react-router-dom';
import { RouteObject } from './types';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const MonDesa = lazy(() => import('../pages/MonDesa'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PUBLIC_ROUTES: Record<string, RouteObject> = {
  HOME: {
    path: '/',
    label: 'Home',
    description: 'Smart monitoring for a safer tomorrow. Leading innovation in natural disaster monitoring through cutting-edge IoT solutions.',
  },
  ABOUT: {
    path: '/about',
    label: 'About',
    description: 'Meet our team of specialists combining expertise in software engineering and IoT with a shared vision for disaster resilience solutions.',
  },
  MONDESA: {
    path: '/mondesa',
    label: 'About MonDesa',
    description: 'Pioneering the future of natural disaster monitoring through innovative IoT solutions and real-time data analysis.',
  },
  PROJECTS: {
    path: '/projects',
    label: 'Projects & Research',
    description: 'Exploring innovative solutions in IoT and disaster monitoring through practical applications and research.',
  },
  PROJECT_DETAIL: {
    path: '/projects/:projectId',
    label: 'Project Details',
    description: 'Detailed information about this innovative IoT project, including features, technology stack, and resources.',
  },
  CONTACT: {
    path: '/contact',
    label: 'Contact',
    description: 'Get in touch with MonDesa. Interested in collaboration or want to learn more about our disaster monitoring solutions?',
  },
  NOT_FOUND: {
    path: '*',
    label: 'Page Not Found',
    description: 'The page you are looking for doesn\'t exist or has been moved.',
  }
};

export const HOME_PATH = PUBLIC_ROUTES.HOME.path;
export const ABOUT_PATH = PUBLIC_ROUTES.ABOUT.path;
export const MONDESA_PATH = PUBLIC_ROUTES.MONDESA.path;
export const PROJECTS_PATH = PUBLIC_ROUTES.PROJECTS.path;
export const PROJECT_DETAIL_PATH = PUBLIC_ROUTES.PROJECT_DETAIL.path;
export const CONTACT_PATH = PUBLIC_ROUTES.CONTACT.path;

// Helper function to generate project detail URL
export const getProjectDetailPath = (projectId: string) => {
  return `/projects/${projectId}`;
};

const routeComponentMap: Record<string, ReactNode> = {
  [HOME_PATH]: <Home />,
  [ABOUT_PATH]: <About />,
  [MONDESA_PATH]: <MonDesa />,
  [PROJECTS_PATH]: <Projects />,
  [PROJECT_DETAIL_PATH]: <ProjectDetail />,
  [CONTACT_PATH]: <Contact />,
  [PUBLIC_ROUTES.NOT_FOUND.path]: <NotFound />,
};

const routes: ReactRouteObject[] = Object.values(PUBLIC_ROUTES).map(route => ({
  path: route.path,
  element: routeComponentMap[route.path]
}));

const ROUTES = {
  PUBLIC: PUBLIC_ROUTES,
};

export { ROUTES };
export default routes;
