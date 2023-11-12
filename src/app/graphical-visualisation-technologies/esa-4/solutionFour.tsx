/* eslint-disable @typescript-eslint/no-shadow */
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { AntisymmetricTorus } from './antisymmetricTorus';
import { Donut } from './donut';
import { Horn } from './horn';

const SolutionFour: React.FC = () => {
    const [gitterVisible, setGitterVisible] = useState<boolean>(true);
    const [areaVisible, setAreaVisible] = useState<boolean>(true);
    return (
        <div className='grid grid-cols-3 gap-4'>
            <Donut gitterVisible={gitterVisible} areaVisible={areaVisible} />
            <AntisymmetricTorus
                gitterVisible={gitterVisible}
                areaVisible={areaVisible}
            />
            <Horn gitterVisible={gitterVisible} areaVisible={areaVisible} />
            <div></div>
            <div className='grid gap-4 mx-auto'>
                <Button onClick={() => setGitterVisible(!gitterVisible)}>
                    Gitter umschalten
                </Button>
                <Button onClick={() => setAreaVisible(!areaVisible)}>
                    Fläche umschalten
                </Button>
            </div>
            <div></div>
        </div>
    );
};

export default SolutionFour;
