/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hLchYNJKs1Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button, CardContent, CardFooter, Card } from '@pb-test/shared';
import { FC } from 'react';

export interface IContentCard {
  title?: string;
  subTitle?: string;
  image?: string;
  buttonText?: string;
  url?: string;
}

export const ContentCard: FC<IContentCard> = ({
  title,
  subTitle,
  image,
  buttonText,
}) => {
  return (
    <Card>
      {image && (
        <div className="aspect-[16/9]">
          <img
            alt="Image"
            className="object-cover"
            src={`https:${image}`}
            style={{
              aspectRatio: '400/225',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold leading-none">{title}</h3>
          <p className="text-sm text-gray-500 leading-none dark:text-gray-400">
            {subTitle}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};
