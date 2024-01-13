//@ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @next/next/no-img-element */
'use client';
import { IconButton, Textarea } from '@material-tailwind/react';
import { useDebounce } from '@uidotdev/usehooks';
import { FC, useEffect, useState } from 'react';

export const SolutionThree: FC = () => {
    const [text, setText] = useState<string>('');
    const debouncedText = useDebounce<string>(text, 1500);
    const [answer, setAnswer] = useState<string>('');

    useEffect(() => {
        if (text) {
            fetch(process.env.DL_API_BASE_URL + 'api/nlp', {
                method: 'POST',
                body: JSON.stringify({ text: debouncedText }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => setAnswer(data.prediction as string))
                .catch((error) =>
                    console.error('Fehler beim Abrufen der Daten:', error)
                );
        }
    }, [debouncedText]);

    return (
        <div className='grid grid-cols-3 gap-4 '>
            <div>{answer}</div>
            <div className='flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2'>
                <Textarea
                    rows={1}
                    resize={true}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder='Beispieltext hier eintragen'
                    className='min-h-full !border-0 focus:border-transparent'
                    containerProps={{
                        className: 'grid h-full',
                    }}
                    labelProps={{
                        className: 'before:content-none after:content-none',
                    }}
                />
                <div>
                    <IconButton variant='text' className='rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                            className='h-5 w-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                            />
                        </svg>
                    </IconButton>
                </div>
            </div>
            <div></div>
        </div>
    );
};
