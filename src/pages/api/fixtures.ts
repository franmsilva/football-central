import format from 'date-fns/format';

import { footballCtrl } from '../../services/footballAPI/controllers';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fixtures = await footballCtrl().v1.get.fixtures({
    params: { date: format(new Date(), 'yyyy-MM-dd') },
  });

  res.status(200).json(fixtures);
};

export default handler;
