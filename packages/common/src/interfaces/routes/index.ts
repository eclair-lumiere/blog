import { Layout } from '../routes/layout';

export const RoutesPathRegex = {
  HOME: '/',
  POSTS: '/posts',
  POST_DETAIL: '/posts/:year/:month/:date/:id',
  PAGE_DETAIL: '/pages/:id',
  TAGS: '/tags',
  TAG_DETAIL: '/tags/:id',
  CATEGORIES: '/categories',
  CATEGORY_DETAIL: '/categories/:id'
};

export enum RoutePathPrefix {
  HOME = '',
  HOME_ALIAS = 'home', // alias for empty path ``
  TAGS = 'tags',
  CATEGORIES = 'categories',
  POSTS = 'posts',
  PAGES = 'pages',
  NAVIGATION = 'navigation',
  PROFILE = 'profile'
}

export interface RouteMeta {
  /** raw key */
  key: string;

  /** full url including protocol, domain, path */
  url: string;

  /** same as layout */
  type: string | Layout;

  /** the sub path: like `/categories`, `/tags */
  path: string;

  /** title with base title as suffix */
  title: string;

  /** key - value pair of meta */
  metas?;

  /* breadcrumbs data*/
  breadcrumbs;

  /** content data, supposed to be api response */
  data?;
}

export const EmptyRouteMeta: RouteMeta = {
  breadcrumbs: {},
  key: '',
  path: '',
  title: '',
  type: '',
  url: ''
};

export interface Meta {
  id?: string;
  name?: string;
  itemprop?: string;
  property?: string;
  content: string;
}

export enum MetaName {
  NAME = 'name',
  DESCRIPTION = 'description',
  AUTHOR = 'author',
  IMAGE = 'image',

  OPEN_GRAPH_TITLE = 'og:title',
  OPEN_GRAPH_DESCRIPTION = 'og:description',
  OPEN_GRAPH_IMAGE = 'og:image',
  OPEN_GRAPH_URL = 'og:url',
  OPEN_GRAPH_TYPE = 'og:type',
  OPEN_GRAPH_SITE_NAME = 'og:site_name',

  GOOGLE_SITE_VERIFICATION = 'google-site-verification',
  GOOGLE_SITE_TRACKING = 'google-analytics'
}

export enum MetaValue {
  WEBSITE = 'website',
  ARTICLE = 'article'
}
