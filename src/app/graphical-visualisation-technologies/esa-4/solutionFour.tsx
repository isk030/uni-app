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
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
            <Donut gitterVisible={gitterVisible} areaVisible={areaVisible} />
            <div className='grid gap-4'>
                <AntisymmetricTorus
                    gitterVisible={gitterVisible}
                    areaVisible={areaVisible}
                />
                <Button onClick={() => setGitterVisible(!gitterVisible)}>
                    Gitter umschalten
                </Button>
                <Button onClick={() => setAreaVisible(!areaVisible)}>
                    Fläche umschalten
                </Button>
            </div>

            <Horn gitterVisible={gitterVisible} areaVisible={areaVisible} />
        </div>
    );
};

export default SolutionFour;
