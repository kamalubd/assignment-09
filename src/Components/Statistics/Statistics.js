import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const quizData = useLoaderData()

    const data = quizData.data;
    // const {name, total} = data;


    return (
        <div className='linechart'>
        <div><h3 className='title'>Number of Quiz Chart by Topic</h3></div>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default Statistics;