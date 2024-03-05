import {
  PageType,
  TComponents,
  TypeArticlePage,
  TypeArticlePageFields,
} from '@pb-test/types';
import { TPageBlock, TPageData } from '../types/page';
import { Entry } from 'contentful';

type TypeArticlePageFieldsMap = TypeArticlePageFields & {
  [key: string]: Entry<any>;
};

export const transformContent = (pageData: TypeArticlePage): TPageData => {
  const { sys, fields: pageFields } = pageData;
  const pageType = sys.contentType.sys.id as PageType;
  const { seoTitle, description, og_description, og_title, content } =
    pageFields;

  const contentBlocks = Object.keys(pageFields).map((key) => {
    const pageField = (pageFields as TypeArticlePageFieldsMap)[key];

    return {
      type: key,
      fields: pageField.fields,
    };
  });

  const dynamicContentBlocks = (content || []).map((block) => {
    const type = block.sys.contentType.sys.id as TComponents;
    const { fields } = block;

    return {
      type,
      fields,
    };
  });

  const blocks = [...contentBlocks, ...dynamicContentBlocks] as TPageBlock[];

  return {
    seoTitle,
    description,
    og_description,
    og_title,
    content: blocks,
    pageType,
  };
};
