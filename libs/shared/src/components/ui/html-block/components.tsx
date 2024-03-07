import { ReactNode } from 'react';

type TChildren = {
  children: ReactNode;
};

export const Text = ({ children }: TChildren) => (
  <p className="align-center">{children}</p>
);
