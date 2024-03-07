import { createClient, EntriesQueries } from 'contentful';
import { FieldsType } from 'contentful/dist/types/types/query/util';

const getClient = ({ isPreview = false }) => {
  const accessToken = isPreview
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: accessToken || '',
    ...(isPreview ? { host: 'preview.contentful.com' } : {}),
  });
};

export const getEntries = async (
  query: EntriesQueries<FieldsType> | undefined
) => {
  const client = getClient({ isPreview: false });

  return client.getEntries(query);
};

export const getPreviewEntries = async (
  query: EntriesQueries<FieldsType> | undefined
) => {
  const client = getClient({ isPreview: true });

  return client.getEntries(query);
};
