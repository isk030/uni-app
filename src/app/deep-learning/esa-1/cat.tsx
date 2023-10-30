/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from 'react';
export const Cat: FC = () => {
    const [iteration, setIteration2] = useState(0);
    const iterate2 = () => {
        setIteration2(iteration + 1);
    };
    useEffect(() => {
        if (iteration < 0) {
            setIteration2(345);
        }

        if (iteration >= 6) {
            setIteration2(0);
        }

        setTimeout(iterate2, 100);
    }, [iteration]);

    return (
        <img
            src={`/sprite/cat_${iteration}-min.png`}
            width='256'
            height='256'
            alt=''
        />
    );
};
