import { PageType, TComponents, TypeArticlePage } from '@pb-test/types';
import { TPageBlock, TPageData } from '../types';

export const transformContent = (pageData: TypeArticlePage): TPageData => {
  const { fields: pageFields } = pageData;
  const { pageType } = pageFields;
  const { seoTitle, description, og_description, og_title, content } =
    pageFields;

  const contentBlocks = (content || []).map((block) => {
    const type = block.sys.contentType.sys.id as TComponents;
    const { fields } = block;

    return {
      type,
      fields,
    };
  });

  return {
    seoTitle,
    description,
    og_description,
    og_title,
    content: contentBlocks as TPageBlock[],
    pageType: pageType as PageType,
  };
};
