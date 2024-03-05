import { FC } from 'react';
import { ContentCard } from '../content-card/contentCard';
import { TImage } from '@pb-test/types';

export interface IGrid {
  title?: string;
  gridItems: {
    fields: {
      title: string;
      subTitle: string;
      image: TImage;
      buttonText: string;
    };
  }[];
}

export const Grid: FC<IGrid> = ({ title, gridItems }) => {
  return (
    <div>
      {title && (
        <h2 className="text-3xl font-bold text-center my-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-2">
        {gridItems.map((item, index) => (
          <ContentCard
            key={index}
            {...item.fields}
            image={item.fields.image?.fields?.file?.url}
          />
        ))}
      </div>
    </div>
  );
};
