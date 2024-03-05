import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Bold, Heading4, Text } from './components';

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <Heading4>{children}</Heading4>
    ),
  },
};
