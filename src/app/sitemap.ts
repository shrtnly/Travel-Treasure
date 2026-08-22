import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.traveltreasure.online';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/corporate-travel',
    '/air-booking',
    '/visa-processing',
    '/hotel-reservation',
    '/airport-transfer',
    '/vip-airport-assistance',
    '/mice-services',
    '/travel-insurance',
    '/online-booking',
    '/partner-airlines',
    '/clients',
    '/certifications',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
