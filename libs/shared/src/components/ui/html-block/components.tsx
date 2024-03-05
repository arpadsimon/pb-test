import { ReactNode } from 'react';

type TChildren = {
  children: ReactNode;
};

export const Bold = ({ children }: TChildren) => (
  <span className="font-bold">{children}</span>
);

export const Text = ({ children }: TChildren) => (
  <p className="align-center">{children}</p>
);

export const Heading4 = ({ children }: TChildren) => (
  <h4 className="text-2xl py-4">{children}</h4>
);
