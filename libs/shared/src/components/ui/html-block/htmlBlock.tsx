import { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { options } from './constants';
import { TypeHtmlBlockFields } from '@pb-test/types';

export const HtmlBlock: FC<TypeHtmlBlockFields> = ({ html }) => {
  const elements = html ? documentToReactComponents(html, options) : null;

  return <div className="flex flex-col py-12 prose">{elements}</div>;
};
