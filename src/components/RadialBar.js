import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

function RadialBarComponent({ score }) {
    const data = [
        {
            percentage: 100,
            fill: 'transparent',
        },
        {
            percentage: score*100,
            fill: '#FF0000',
        }
    ];
    return (
        <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={10} data={data} width={258} height={263} >
                <RadialBar
                    minAngle={10}
                    dataKey="percentage"
                    cornerRadius={10} 
                />
            </RadialBarChart>
    )
}
export default RadialBarComponent
