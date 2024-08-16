export type EncodeWordPressPageResponseType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    footnotes: string;
  };
  class_list: string[];
  yoast_head: string;
  yoast_head_json: {
    title: string;
    description: string;
    robots: {
      index: string;
      follow: string;
      max_snippet: string;
      max_image_preview: string;
      max_video_preview: string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_modified_time: string;
    og_image: Array<{ url: string }>;
    twitter_card: string;
    twitter_misc: {
      'Est. reading time': string;
    };
    schema: {
      '@context': string;
      '@graph': Array<{
        '@type': string;
        '@id': string;
        url?: string;
        name?: string;
        isPartOf?: { '@id': string };
        datePublished?: string;
        dateModified?: string;
        description?: string;
        breadcrumb?: { '@id': string };
        inLanguage?: string;
        potentialAction?: Array<{ '@type': string; target: Array<string> }>;
      }>;
    };
  };
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
    'version-history': Array<{ count: number; href: string }>;
    'predecessor-version': Array<{ id: number; href: string }>;
    'wp:attachment': Array<{ href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
};
