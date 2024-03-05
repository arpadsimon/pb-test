import {
  TComponentMap,
  PageType,
  TypeHeroSectionFields,
  TypeHtmlBlockFields,
  TypeGridFields,
  TComponents,
} from '@pb-test/types';
import { TArticlePage } from '../components/article-page';
import { FC } from 'react';

export type TTemplateDictionaryMap = {
  [key in PageType]: [FC<TArticlePage>, TComponentMap];
};

export type TPageBlock = {
  type: TComponents;
  fields: Array<TypeHeroSectionFields | TypeHtmlBlockFields | TypeGridFields>;
};

export type TPageData = {
  seoTitle?: string;
  description?: string;
  og_description?: string;
  og_title?: string;
  content: TPageBlock[];
  pageType: PageType;
};
