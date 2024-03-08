import React, { FC } from 'react';
import { renderBlocks } from '../../helpers';
import { TPageBlock } from '../../types';
import { TComponentMap } from '@pb-test/types';

export type TArticlePage = {
  content: TPageBlock[];
  components: TComponentMap;
  isPreview?: boolean;
};

const ArticlePage: FC<TArticlePage> = ({
  content,
  components,
  isPreview = false,
}) => {
  return (
    <>
      {isPreview && (
        <div className="sticky top-0 font-bold text-center w-full bg-red-700 bg-opacity-80 text-white py-2">
          PREVIEW MODE!!!
        </div>
      )}
      <div className="container">{renderBlocks(content, components)}</div>
    </>
  );
};

export default ArticlePage;
