import { IControllerCtx } from '@services/types';

import { footballClient } from '../client';

import { getFixtures } from './fixtures';

export const footballCtrl = () => {
  const ctx: IControllerCtx = {
    client: footballClient(),
  };

  return {
    v1: {
      get: {
        fixtures: getFixtures(ctx),
      },
    },
  };
};
