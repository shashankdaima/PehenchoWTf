// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPencho, addPencho, getPenchoCount, getPenchoById, getPenchoRankById } from '../../db'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') {
        try {
            const queryParams = req.query;
            const id = (queryParams.id as string)
            const pencho=await getPenchoById(id);
            const result = await getPencho(0,3);
            const postRank=parseInt((await getPenchoRankById(id)).toString())+1;
            res.status(200).json({ itemRank:postRank, item:pencho, topItems: result });
        }
        catch (e) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
