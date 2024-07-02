import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart, Pie, Sector, Cell, ResponsiveContainer
} from "recharts";
import { Link } from 'react-router-dom';


const colors = ['orange', 'yellow', 'red', 'white', 'orange', 'yellow'];

const data4 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];


const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



function Charts() {

    const [userData, setUserData] = useState([]);

    const getUserData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUserData(response.data);
        })
    }

    useEffect(() => {
        getUserData();
    }, [])


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">+6%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">43</h1>
                                <p class="card-text">New Tickets</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">-2%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">17</h1>
                                <p class="card-text">Closed Today</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">+9%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">7</h1>
                                <p class="card-text">New Replies</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">+3%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">27.3k</h1>
                                <p class="card-text">Followers</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">-2%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">$95</h1>
                                <p class="card-text">Daily Earnings</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-6 mt-4'>
                        <div class="card text-bg-secondary ">
                            <div class="card-header my-0">-1%</div>
                            <div class="card-body pt-2 text-center">
                                <h1 class="card-title">621</h1>
                                <p class="card-text">Products</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-sm-7 col-12'>
                            <div class="card text-bg-secondary mb-3">
                                <div class="card-header">Development Activity</div>
                                <div class="card-body">
                                    <BarChart
                                        width={500}
                                        height={250}
                                        data={data}
                                    >
                                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                        <XAxis dataKey="name" />
                                        {/* <YAxis /> */}
                                        <Tooltip shared={false} trigger="mouseover" />
                                        <Legend />
                                        <Bar dataKey="pv" fill="yellow" />
                                        <Bar dataKey="uv" fill="white" />
                                        <Bar dataKey="amt" fill="orange" />
                                    </BarChart>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-5 col-12'>
                            <div class="card text-bg-secondary mb-3">
                                <div class="card-header">Profits</div>
                                <div class="card-body">
                                    <PieChart width={370} height={250}>
                                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="orange" />
                                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="yellow" label />
                                    </PieChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <div class="card text-bg-secondary mb-3">
                            <div class="card-header bg-transparent text-white">Top 10 User Details</div>
                            <div class="card-body">
                                <table className='chartstable'>
                                    <thead>
                                        <tr>
                                            <th scope="col">SR NO</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">CITY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map((data) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{data.id}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.address.city}</td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-12'>
                        <div class="card text-bg-secondary mb-3">
                            <div class="card-header bg-transparent text-white">Daily User Traffic</div>
                            <div class="card-body">
                                <BarChart
                                    width={430}
                                    height={285}
                                    data={data4}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Bar dataKey="uv" fill="yellow" shape={<TriangleBar />} label={{ position: 'top' }}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Charts