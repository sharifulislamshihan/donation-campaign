import { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const donationInformation = useLoaderData();
    const donatedInformation = JSON.parse(localStorage.getItem('donation-details'));

    const data = [
        {
            name: "Total Donation", value: donationInformation.length - donatedInformation.length
        },
        {
            name: "Your Donation", value: donatedInformation.length
        },
    ];
        const color = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (

        <section
            id="stat"
            className=" content-box items-center my-10 "
        >
            <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={color[index % color.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='my-10 flex gap-9 justify-center'>
                <div className='flex gap-4'>
                    <h2 className='text-black text-xl font-semibold'>Your Donation</h2>
                    <div className="w-32 h-3 bg-[#00C49F] mt-1"></div>
                </div>
                <div className='flex gap-4'>
                    <h2 className='text-black text-xl font-semibold'>Total Donation</h2>
                    <div className="w-32 h-3 bg-[#FF444A] mt-1"></div>
                </div>
            </div>
        </section>
        // <ResponsiveContainer width="100%" height="100%">
        //     <PieChart width={400} height={400}>
        //         <Pie
        //             dataKey="value"
        //             isAnimationActive={false}
        //             data={data01}
        //             cx="50%"
        //             cy="50%"
        //             outerRadius={80}
        //             fill="#8884d8"
        //             label
        //         />
        //         <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
        //         <Tooltip />
        //     </PieChart>
        // </ResponsiveContainer>
    );
};

export default Statistics;