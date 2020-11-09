import anime from 'animejs';
import { Howl } from 'howler';

import * as animation from '../../../packages/animation';
import * as sounds from '../../../packages/sounds';

function getPackagesScope () {
  return {
    anime,
    Howl,
    ...animation,
    ...sounds
  };
}

export { getPackagesScope };
