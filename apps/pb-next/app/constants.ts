import { PageType, TComponentMap } from '@pb-test/types';
import { Grid, Hero, HtmlBlock } from '@pb-test/shared';
import ArticlePage from '../components/article-page';
import { TTemplateDictionaryMap } from '../types';
import IndexPage from '../components/index-page';

export const COMPONENT_DICTIONARY: TComponentMap = {
  grid: [Grid],
  heroSection: [Hero],
  htmlBlock: [HtmlBlock],
};

export const TEMPLATE_DICTIONARY: TTemplateDictionaryMap = {
  [PageType.ArticlePage]: [ArticlePage, COMPONENT_DICTIONARY],
  [PageType.IndexPage]: [IndexPage, COMPONENT_DICTIONARY],
};
