import React from 'react';

import Video from '../Video';
import Download from '../Download';
import Info from '../Info';
import Screenshots from '../Screenshots';
import Reviews from '../Reviews';
import Social from '../Social';

import preview1 from './screen-preview-1.png';
import preview2 from './screen-preview-2.png';
import preview3 from './screen-preview-3.png';
import preview4 from './screen-preview-4.png';
import preview5 from './screen-preview-5.png';

import full1 from './screen-full-1.jpg';
import full2 from './screen-full-2.jpg';
import full3 from './screen-full-3.jpg';
import full4 from './screen-full-4.jpg';
import full5 from './screen-full-5.jpg';

const ConductAR = () => {
  return (
    <div>
      <Video url="https://www.youtube.com/watch?v=9QQt83vyqLI" />
      <Download switchStoreUrl="https://www.nintendo.com/games/detail/conduct-together-switch" />
      <Info
        tagline="The Party Railroad Game"
        description={
          <span>
            Conduct TOGETHER! is an addictive game of explosive railway action that will challenge
            your inner conductor. 
            <br />
            <br />
            Conduct everything yourself or hand a Joy-Con to a friend for a hectic teamwork of
            commanding trains, switching tracks and avoiding collisions in increasingly challenging
            action-puzzles. Play with up to 4 friends for the ultimate party game!
          </span>
        }
        descriptionColor="#34cdfd"
      />
      <Screenshots
        images={[
          { preview: preview1, full: full1 },
          { preview: preview2, full: full2 },
          { preview: preview3, full: full3 },
          { preview: preview4, full: full4 },
          { preview: preview5, full: full5 },
        ]}
      />
      <Reviews
        reviews={[
          {
            text:
              'Conduct TOGETHER! is a fun, fast-paced action puzzler that has hours of content hidden beneath its simple low-polygon exterior.',
            source: {
              name: 'Switch Watch',
              url: 'https://switchwatch.co.uk/conduct-together-switch-review/',
            },
          },
          {
            text:
              'Conduct TOGETHER! is bundles of fun, whether you’re playing with a friend, or on your own.',
            source: {
              name: 'Miketendo64',
              url: 'https://miketendo64.com/2018/12/06/switch-review-conduct-together/',
            },
          },
        ]}
      />
      <Social presskit="https://www.dropbox.com/sh/44qnzo7tmrqx5p7/AABmjXkix5nh3t6zRWLB8mUfa?dl=1" />
    </div>
  );
};

export default ConductAR;
