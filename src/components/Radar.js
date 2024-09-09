import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

function RadarComponent(props) {
    const data = props.data
    return (
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} width={258} height={263} style={{ backgroundColor: "#282D30", borderRadius: "10px"}}>
            <PolarGrid stroke='white' gridType="polygon" radialLines={false} />
            <PolarRadiusAxis domain={[0, 150]} tick={false} axisLine={false} />
            <PolarAngleAxis dataKey="kind" stroke='white' style={{ margin: "15px" }} tick={{ fontSize: '12px'}} tickLine={false}/>
            <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} outerRadius="60%" />
            <Tooltip></Tooltip>
        </RadarChart>
    )
}
export default RadarComponent