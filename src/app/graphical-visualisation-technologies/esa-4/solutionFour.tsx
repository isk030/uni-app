/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { AntisymmetricTorus } from './antisymmetricTorus';
import { Custom } from './custom';
import { Donut } from './donut';

const SolutionFour: React.FC = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <Donut />
            <AntisymmetricTorus />
            <Custom />
        </div>
    );
};

export default SolutionFour;
