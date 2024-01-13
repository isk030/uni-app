/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';


export const POST = async (req: NextRequest) => {
    try {
        const res: Response = await fetch(
            process.env.DL_API_BASE_URL + 'api/nlp/',

            {
                method: 'POST',
                body: JSON.stringify(req.body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const data = await res.json() as string

        if (res.status !== 200) {
            return NextResponse.json(
                { error: 'Prediction failed' },
                { status: 500 }
            );
        }

        return Response.json(data)
    } catch (error) {
        return NextResponse.json({ Message: 'Failed', status: 500 });
    }
}