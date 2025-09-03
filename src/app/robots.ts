import { siteConfig } from "@/site-config";
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${siteConfig.links.deploymentUrl}/sitemap.xml`,
  };
}