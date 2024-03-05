import { ReactNode } from 'react';
import { TComponentMap } from '@pb-test/types';
import { TPageBlock } from '../types/page';

export const renderBlocks = (
  blocks: TPageBlock[],
  components: TComponentMap
): ReactNode => {
  return (blocks || []).map((block, index) => {
    const { type, fields: properties } = block;
    const [Component] = components[type] || [];

    return Component ? (
      <div key={index}>
        <Component {...properties} />
      </div>
    ) : null;
  });
};
