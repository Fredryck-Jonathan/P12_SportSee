import { LineChart, Line, XAxis, Tooltip, } from 'recharts';

const CustomTooltip = ({ payload, active }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className='text_custom_tooltip'>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

function Graph(props) {
    const data = props.data
    return (
        <div className='home_graph_line_component'>
            <LineChart width={258} height={190} data={data} margin={{ top: 0, right: 20, bottom: 0, left: 20 } } >
                <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={4} dot={false} activeDot={{r: 7 }} />
                <XAxis dataKey="day" axisLine={false} tick={{ fontWeight: 500 ,fontSize: 12, fill: 'white' }} tickLine={false} dx={0} dy={0} />
                <Tooltip content={<CustomTooltip />}  cursor={false}/>
            </LineChart>
        </div>
    )
}
export default Graph