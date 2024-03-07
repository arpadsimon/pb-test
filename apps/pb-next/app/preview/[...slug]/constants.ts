import { PageType, TComponentMap } from '@pb-test/types';
import { Grid, Hero, HtmlBlock } from '@pb-test/shared';
import PreviewArticlePage from '../../../components/preview-article-page';
import { TTemplateDictionaryMap } from '../../../types';

export const COMPONENT_DICTIONARY: TComponentMap = {
  grid: [Grid],
  heroSection: [Hero],
  htmlBlock: [HtmlBlock],
};

export const TEMPLATE_DICTIONARY: TTemplateDictionaryMap = {
  [PageType.ArticlePage]: [PreviewArticlePage, COMPONENT_DICTIONARY],
};
