import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../routes';

interface PageHelmetProps {
    title?: string;
    description?: string;
    routeKey?: keyof typeof ROUTES.PUBLIC;
}

export const PageHelmet = ({ title, description, routeKey }: PageHelmetProps) => {
    const siteTitle = 'MonDesa';

    let pageTitle = title;
    let pageDescription = description;

    if (routeKey && ROUTES.PUBLIC[routeKey]) {
        if (!pageTitle) pageTitle = ROUTES.PUBLIC[routeKey].label;
        if (!pageDescription) pageDescription = ROUTES.PUBLIC[routeKey].description;
    }

    const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {pageDescription && <meta name="description" content={pageDescription} />}
        </Helmet>
    );
};
