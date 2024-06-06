// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Pencho from '../../models/pencho'
import { getPencho, addPencho, getPenchoCount, upvotePencho } from '../../db'
import { pages } from 'next/dist/build/templates/app-page';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const { penchoId } = req.body;
        try {
            if (penchoId == null) {
                throw Error("No PenchoId is invalid.");
            }
            await upvotePencho(penchoId);
            res.status(201).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message || 'Failed to upvote Pencho' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
