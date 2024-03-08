import React, { FC } from 'react';
import { renderBlocks } from '../../helpers';
import { TPageBlock } from '../../types';
import { TComponentMap } from '@pb-test/types';

export type TIndexPage = {
  content: TPageBlock[];
  components: TComponentMap;
  isPreview?: boolean;
};

const IndexPage: FC<TIndexPage> = ({
  content,
  components,
  isPreview = false,
}) => {
  return (
    <>
      {isPreview && (
        <div className="sticky top-0 font-bold text-center w-full bg-red-700 bg-opacity-80 text-white py-2">
          PREVIEW MODE!!!
        </div>
      )}
      <div className="container">
        {renderBlocks(content, components)}
        <h2 className="font-bold text-6xl text-center my-6">
          Index Page Template
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          justo, rhoncus nec pulvinar vitae, ullamcorper id risus. In interdum
          porttitor urna ut faucibus. Praesent convallis pharetra neque nec
          dignissim. Sed mollis at nulla sit amet egestas. Curabitur gravida
          cursus ex sed tempor. Aliquam sit amet auctor odio. Vivamus ultrices
          leo sit amet sapien malesuada, vitae euismod odio ornare. Nam iaculis
          dignissim enim, nec viverra mauris gravida vestibulum. Morbi varius
          vehicula ex gravida mollis. Aenean vulputate luctus urna sed
          scelerisque. Proin blandit dui vitae accumsan euismod. Fusce quis
          felis ut dolor ultricies eleifend non id nisl. Fusce consequat mauris
          ac auctor consequat. Duis semper eros neque, quis convallis arcu
          pharetra vitae. Fusce tincidunt tortor ipsum, quis consequat mauris
          mattis nec. Praesent sodales auctor ante, ac ultrices leo hendrerit
          sed. Mauris suscipit facilisis ullamcorper. In at vehicula purus.
          Suspendisse ut tellus hendrerit, venenatis massa non, posuere magna.
          Cras lorem mi, viverra non ullamcorper ac, fringilla ut felis. Morbi
          suscipit, risus id vestibulum elementum, urna odio fringilla orci, non
          commodo purus tellus eu nisi. Aenean scelerisque maximus lectus, non
          lobortis eros aliquam quis. Maecenas aliquam nisl quis orci varius,
          sed interdum ipsum porttitor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce mollis placerat egestas. Suspendisse et sodales
          odio. Phasellus posuere, est in sodales aliquam, odio nisl interdum
          metus, sit amet pulvinar sem enim nec justo. Vivamus at egestas eros.
          Curabitur pulvinar ex sed urna laoreet vulputate. Sed et risus sit
          amet magna sagittis aliquet. Cras ac sem euismod, efficitur leo eu,
          egestas nisl. Praesent arcu nisl, rhoncus scelerisque est ut,
          condimentum euismod mi. Vivamus sit amet consequat nisl. Vivamus
          mauris lacus, cursus eget mattis eu, varius eu lacus. Sed ultrices
          vestibulum risus, a tempus nibh sagittis malesuada. Nam a arcu
          porttitor, laoreet eros in, fringilla justo. Donec luctus, erat in
          malesuada scelerisque, diam mi bibendum mi, quis interdum turpis mi
          eget mi. Suspendisse scelerisque nisi vitae nisl laoreet porttitor.
          Cras euismod nisl eu dui lacinia finibus. Aenean id sapien est.
          Integer eleifend massa eu mauris varius aliquet. Maecenas scelerisque
          tristique accumsan. Sed tellus orci, maximus sit amet diam vel,
          commodo fermentum lectus. Curabitur congue neque at sem viverra, sed
          facilisis nunc tempus. Aliquam venenatis maximus nulla id ultrices.
          Vivamus consectetur venenatis posuere. Maecenas malesuada malesuada
          quam at egestas. Vivamus erat elit, facilisis pharetra suscipit quis,
          commodo non ipsum. Proin elementum odio scelerisque odio tempor, vitae
          viverra est dictum. Etiam elementum nunc convallis, ultricies leo eu,
          efficitur augue. Suspendisse non gravida est. Etiam fringilla id justo
          sed luctus. Nullam et lorem nec sapien pharetra venenatis ut a tortor.
          Sed semper finibus elit, id ultricies tortor pulvinar nec. Etiam in
          lorem mauris. Donec eu sapien nulla.
        </p>
      </div>
    </>
  );
};

export default IndexPage;
