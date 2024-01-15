/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
//@ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @next/next/no-img-element */
'use client';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Textarea,
    Typography,
} from '@material-tailwind/react';
import { useDebounce } from '@uidotdev/usehooks';
import { FC, useEffect, useState } from 'react';
import { Chart2 } from './chart2';
import { effi } from './effi';

export const SolutionThree: FC = () => {
    const [text, setText] = useState<string>(
        `Sie nickte. »Es ist so, wie du sagst. Und ich muß dir bekennen, ich habe nichts in meinem Leben gesehen, was mich so traurig gestimmt hätte. Wir wollen das`
    );
    const debouncedText = useDebounce<string>(text, 800);
    const [answer, setAnswer] = useState<string>('');
    const [prob, setProb] = useState<string>('');
    const [answer2, setAnswer2] = useState<string>('');
    const [prob2, setProb2] = useState<string>('');
    const [chartData, setChartData] = useState(null);
    const [topK, setTopK] = useState<number>(5);

    useEffect(() => {
        if (text) {
            fetch(process.env.DL_API_BASE_URL + 'api/nlp', {
                method: 'POST',
                body: JSON.stringify({ text: debouncedText, topK: topK }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setAnswer(
                        data.prediction1[data.prediction1.length - 1]
                            .name as string
                    );
                    setProb(
                        data.prediction1[data.prediction1.length - 1]
                            .probability as string
                    );
                    setAnswer2(
                        data.prediction2[data.prediction2.length - 1]
                            .name as string
                    );
                    setProb2(
                        data.prediction2[data.prediction2.length - 1]
                            .probability as string
                    );
                    setChartData(data);
                    window.console.log(data);
                })
                .catch((error) =>
                    console.error('Fehler beim Abrufen der Daten:', error)
                );
        }
    }, [debouncedText, topK]);

    return (
        <div className='grid grid-cols-3 gap-4 '>
            <div className='flex w-full h-32 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2'>
                <Textarea
                    rows={1}
                    resize={true}
                    defaultValue={`Sie nickte. »Es ist so, wie du sagst. Und ich muß dir bekennen, ich habe nichts in meinem Leben gesehen, was mich so traurig gestimmt hätte. Wir wollen das`}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder='Seed Text hier eintragen!'
                    className='min-h-full !border-0 focus:border-transparent'
                    containerProps={{
                        className: 'grid h-full',
                    }}
                    labelProps={{
                        className: 'before:content-none after:content-none',
                    }}
                />
            </div>

            <Card className='mt-6 w-full '>
                <CardBody className='mx-auto text-center'>
                    <Typography variant='h5' color='blue-gray' className='mb-2'>
                        TOP K
                    </Typography>
                    <ButtonGroup color='gray' className='justify-center'>
                        <Button
                            onClick={() => setTopK(5)}
                            className={topK === 5 ? 'bg-gray-500' : ''}
                        >
                            5
                        </Button>
                        <Button
                            onClick={() => setTopK(10)}
                            className={topK === 10 ? 'bg-gray-500' : ''}
                        >
                            10
                        </Button>
                        <Button
                            onClick={() => setTopK(20)}
                            className={topK === 20 ? 'bg-gray-500' : ''}
                        >
                            20
                        </Button>
                        <Button
                            onClick={() => setTopK(100)}
                            className={topK === 100 ? 'bg-gray-500' : ''}
                        >
                            100
                        </Button>
                    </ButtonGroup>
                </CardBody>
            </Card>
            {chartData && text && (
                <div>
                    <div>
                        <span className='font-bold'>FFNN</span>:
                        Wahrscheinlichstes Wort:{' '}
                        <span className='font-bold'>{answer}</span> mit einer
                        Wahrscheinlichkeit von{' '}
                        <span className='font-bold'>{prob}</span>
                    </div>
                    <div>
                        <span className='font-bold'>LSTM</span>:
                        Wahrscheinlichstes Wort:{' '}
                        <span className='font-bold'>{answer2}</span> mit einer
                        Wahrscheinlichkeit von{' '}
                        <span className='font-bold'>{prob2}</span>
                    </div>
                </div>
            )}
            {chartData && text && (
                <>
                    <div className='h-64 col-span-3'>
                        <h1>FFNN</h1>
                        <Chart2 red={false} data={chartData?.prediction1} />
                    </div>
                    <div className='h-64 col-span-3'>
                        <h1>LSTM</h1>
                        <Chart2 red data={chartData?.prediction2} />
                    </div>
                </>
            )}
            {chartData && text && (
                <div className='col-span-3 row-span-4 h-[600px]'>
                    <Textarea
                        variant='static'
                        label='Trainings Text'
                        className='min-h-full'
                        containerProps={{
                            className: 'grid h-full',
                        }}
                        placeholder=''
                        value={effi}
                    />
                </div>
            )}
        </div>
    );
};
