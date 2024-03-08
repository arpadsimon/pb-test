import { transformContent } from '../../../helpers/';
import { notFound } from 'next/navigation';
import { TEMPLATE_DICTIONARY } from '../../constants';
import { getPreviewEntries } from '@pb-test/shared';
import { TPageData } from '../../../types';
import { Metadata } from 'next';
import { TypeArticlePage } from '@pb-test/types';

type TPageProps = {
  params: {
    slug: string[];
  };
};

async function getData(slug: string[] = ['/']): Promise<any> {
  const slugToMatch = slug.join('/');

  return getPreviewEntries({
    content_type: 'articlePage',
    'fields.slug': slugToMatch,
    include: 10,
  })
    .then(({ items }) => transformContent(items[0] as TypeArticlePage))
    .catch((err: Error) => console.log(err));
}

export async function generateMetadata({
  params,
}: TPageProps): Promise<Metadata | undefined> {
  const { slug } = params;

  try {
    const pageData = await getData(slug);
    const { seoTitle, description, og_title, og_description } = pageData;

    return {
      title: seoTitle,
      description,
      openGraph: {
        title: og_title,
        description: og_description,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function Page({ params }: TPageProps) {
  const { slug } = params;
  const pageData: TPageData = await getData(slug);
  if (!pageData) return notFound();
  const { pageType, content } = pageData;

  const [Page, components] = TEMPLATE_DICTIONARY[pageType];

  return <Page content={content} components={components} isPreview />;
}
