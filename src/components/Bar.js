import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function BarComponent(props) {
    const data = props.data
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value}kg`}</p>
                    <p className="label">{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <div style={{ width: '100%', height: '100%', gridColumn: '1 / 3' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={20}           style={{ position: 'relative', zIndex: 1 }} >
                    <CartesianGrid strokeDasharray="3 3" fill="transparent" />
                    <Tooltip content={<CustomTooltip />}  />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={20} radius={[10, 10, 0, 0]} style={{ position: 'relative', zIndex: 200 }} />
                    <Bar dataKey="calories" fill="#E60000" barSize={20} radius={[10, 10, 0,0]}  style={{ position: 'relative', zIndex: 200 }}/>
                    <XAxis dataKey="name" />
                    <YAxis axisLine={false} tickLine={false} orientation="right"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
export default BarComponent