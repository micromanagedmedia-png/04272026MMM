// src/pages/video-sitemap.xml.ts
// Astro endpoint — generates /video-sitemap.xml at build time
import type { APIRoute } from 'astro';
import { publishedVideos } from '../data/videos';

const APP_URL = 'https://micromanagedmedia.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Convert ISO 8601 duration (e.g. PT12M45S) to total seconds */
function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] ?? '0', 10);
  const minutes = parseInt(match[2] ?? '0', 10);
  const seconds = parseInt(match[3] ?? '0', 10);
  return hours * 3600 + minutes * 60 + seconds;
}

export const GET: APIRoute = () => {
  const entries = publishedVideos.map((v) => {
    const pageUrl = `${APP_URL}/videos/${v.slug}`;
    const thumbUrl = `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`;
    const contentUrl = `https://www.youtube.com/watch?v=${v.youtubeId}`;
    const embedUrl = `https://www.youtube.com/embed/${v.youtubeId}`;
    const uploadDate = `${v.uploadDate}T08:00:00+00:00`;

    return `  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(thumbUrl)}</video:thumbnail_loc>
      <video:title>${escapeXml(v.title)}</video:title>
      <video:description>${escapeXml(v.description)}</video:description>
      <video:content_loc>${escapeXml(contentUrl)}</video:content_loc>
      <video:player_loc>${escapeXml(embedUrl)}</video:player_loc>
      <video:duration>${parseDuration(v.duration)}</video:duration>
      <video:publication_date>${uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:uploader info="${escapeXml(APP_URL)}">MicroManaged Media</video:uploader>
      <video:live>no</video:live>
      <video:tag>${v.tags.map(escapeXml).join('</video:tag>\n      <video:tag>')}</video:tag>
    </video:video>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

export const prerender = true;
