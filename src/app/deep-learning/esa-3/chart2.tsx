/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FC } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export const Chart2: FC<{
    data: Array<{ name: string; probability: number }>;
    red: boolean;
    handleClick: (v: unknown) => void;
}> = ({ data, red, handleClick }) => {
    // const data = [ s
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //     },
    // ];
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' includeHidden />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar
                    dataKey='probability'
                    minPointSize={10}
                    fill={red ? '#82ca9d' : 'red'}
                    activeBar={<Rectangle fill='gold' stroke='purple' />}
                    onClick={(v) => handleClick(v)}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
