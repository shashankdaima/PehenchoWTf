// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Pencho from '../../models/pencho'
import { getPencho, addPencho, getPenchoCount } from '../../db'
import { pages } from 'next/dist/build/templates/app-page';

// Define the types for the request and response
type ResponseData = Pencho[] | { message: string }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') {
        try {
            const queryParams = req.query;
            const page = parseInt(queryParams.page as string) || 1;
            const pageSize = parseInt(queryParams.pageSize as string) || 10;
            const result = await getPencho(page - 1, pageSize);
            const count = await getPenchoCount();
            res.status(200).json({ totalPages: Math.ceil(count / pageSize), items: result });
        }
        catch (e) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    } else if (req.method === 'POST') {
        const { title, content } = req.body;

        if (!title || !content) {
            res.status(400).json({ message: 'Missing required fields' });
            return;
        }

        try {
            await addPencho(title, content);
            res.status(201).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create new Pencho' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
