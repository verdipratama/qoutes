import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Skeletons = () => {
  return (
    <SkeletonTheme color="#282c34" highlightColor="#ff002b">
      <div className="container home">
        {/* <Skeleton height={70} /> */}
        <div className="empty-state">
          <h1>
            <Skeleton height={50} />
          </h1>
          <p>
            <Skeleton height={10} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Skeletons;
