import { createClient, EntriesQueries } from 'contentful';
import { FieldsType } from 'contentful/dist/types/types/query/util';

const getClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  });
};

export const getEntries = async (
  query: EntriesQueries<FieldsType> | undefined
) => {
  const client = getClient();

  return client.getEntries(query);
};
