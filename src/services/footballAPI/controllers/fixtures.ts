import { TControllerFunc } from '@services/types';
import { FootballAPI } from '@types';

import { GET_FIXTURES } from '../routes';

interface IGetFixturesConfig {
  params: { date: string };
}

export const getFixtures: TControllerFunc<IGetFixturesConfig, FootballAPI.IFixture[]> =
  ({ client }) =>
  async (config) => {
    const res = await client.get(GET_FIXTURES, config);

    return res.data;
  };
