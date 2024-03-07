import React, { FC } from 'react';
import { renderBlocks } from '../../helpers';
import { TPageBlock } from '../../types';
import { TComponentMap } from '@pb-test/types';

export type TArticlePage = {
  content: TPageBlock[];
  components: TComponentMap;
};

const ArticlePage: FC<TArticlePage> = ({ content, components }) => {
  return <div className="container">{renderBlocks(content, components)}</div>;
};

export default ArticlePage;
