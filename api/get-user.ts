import { NowRequest, NowResponse } from '@now/node';

export default (req: NowRequest, res: NowResponse) => {
    res.josn({name: 'John Dow' });
};