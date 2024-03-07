import { BLOCKS } from '@contentful/rich-text-types';
import { Text } from './components';

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
};
