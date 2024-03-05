import { FC } from 'react';

export type TComponents = 'heroSection' | 'grid' | 'htmlBlock';

export type TComponentMap = {
  [key in TComponents]?: [FC<any>];
};

export type TImage = {
  fields: {
    file: {
      url: string;
    };
  };
};
