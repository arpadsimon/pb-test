import { FC } from 'react';
import { Button } from '../button/button';

interface IHero {
  title: string;
  subTitle: string;
  buttons: any[];
  desktopImage?: any;
  alignment: 'center' | 'left' | 'right';
}
export const Hero: FC<IHero> = ({
  title,
  buttons,
  subTitle,
  desktopImage,
  alignment,
}) => {
  const bgImageUrl = desktopImage?.fields?.file?.url;
  const bgClasses = bgImageUrl ? ' bg-cover bg-no-repeat' : '';
  const textColor = bgImageUrl ? 'text-white' : 'text-gray-800';
  const heroAlignment =
    alignment === 'center'
      ? 'items-center'
      : alignment === 'left'
      ? 'items-start'
      : 'items-end';

  const subTitleAlignment =
    alignment === 'center'
      ? 'text-center'
      : alignment === 'left'
      ? 'text-left'
      : 'text-right';

  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 bg-fuchsia-800${bgClasses}`}
      // TODO: bg-[url('/img/hero-pattern.svg')]
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:gap-16">
          <div className={`flex flex-col ${heroAlignment} space-y-2`}>
            <h1
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] ${textColor} pb-6`}
            >
              {title}
            </h1>
            <p
              className={`md:max-w-[75%] text-gray-500 md:text-xl dark:text-gray-200 pb-6 ${subTitleAlignment}`}
            >
              {subTitle}
            </p>
            <div className="space-x-4">
              {buttons.map((button, index) => {
                const {
                  fields: { title: text },
                } = button;

                return (
                  <Button key={index} variant={'secondary'}>
                    {text}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
