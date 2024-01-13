/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
    const url = process.env.DL_API_BASE_URL + 'api/dl';
    const res = await fetch(url);
    const data = (await res.json()) as Array<{ [key: string]: string }>;

    return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
        return NextResponse.json(
            { error: 'No files received.' },
            { status: 400 }
        );
    }

    try {
        const res: Response = await fetch(
            process.env.DL_API_BASE_URL + 'api/uploadfile/',
            {
                method: 'POST',
                body: formData,
            }
        );

        if (res.status !== 201) {
            return NextResponse.json(
                { error: 'Upload failed.' },
                { status: 500 }
            );
        }

        return NextResponse.json(await res.json());
    } catch (error) {
        return NextResponse.json({ Message: 'Failed', status: 500 });
    }
};


