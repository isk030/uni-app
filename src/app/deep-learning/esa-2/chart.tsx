'use client';
import { FC } from 'react';
import {
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Scatter,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
export type Props = {
    data: Array<{ index: number; red?: number; blue?: number; green?: number }>;
};

export const Chart2: FC<Props> = ({ data }) => {
    return (
        <div className='h-96 col-span-full w-full'>
            <ResponsiveContainer width='100%' height='100%'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data && data}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke='#f5f5f5' />
                    <Tooltip />
                    <Legend />
                    <XAxis
                        dataKey='index'
                        type='number'
                        label={{
                            value: 'x',
                            position: 'insideBottomRight',
                            offset: -20,
                        }}
                        domain={[-1, 1]}
                    />
                    <YAxis
                        type='number'
                        label={{
                            value: 'y',
                            position: 'insideLeft',
                        }}
                        domain={[-1, 2]}
                    />
                    <Scatter name='Traningsdaten' dataKey='red' fill='red' />
                    <Line
                        name='Referenz'
                        dataKey='blue'
                        stroke='blue'
                        dot={false}
                        strokeWidth={3}
                    />
                    {/* <Scatter name='Vorhersage' dataKey='green' fill='green' /> */}
                    <Line
                        name='Vorhersage'
                        dataKey='green'
                        stroke='green'
                        strokeWidth={5}
                        dot={false}
                    />
                    <Line
                        dataKey='blueLine'
                        stroke='blue'
                        dot={false}
                        activeDot={false}
                        legendType='none'
                    />
                    <Line
                        dataKey='redLine'
                        stroke='red'
                        dot={false}
                        activeDot={false}
                        legendType='none'
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};
