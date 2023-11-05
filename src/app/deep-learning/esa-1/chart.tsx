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

export type DataType = Array<{ name: string; value: number; fill?: string }>;

export const Chart: FC<{ data: DataType }> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
                <CartesianGrid />
                <XAxis
                    dataKey='name'
                    type='category'
                    interval={'preserveStart'}
                />
                <YAxis scale='sqrt' />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey='value'
                    name={'confidence'}
                    fill='#8884d8'
                    activeBar={<Rectangle fill='pink' stroke='blue' />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
