import React from 'react';
import {Pie} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

function piechart(props) {
    return (
        <div className='h-[35vh]'>
            <Pie 
                data={{
                labels: ["Completed","Failed"],
                datasets:[{
                    label: "price",
                    data:["80","20"],
                    backgroundColor: [
                        '#2ED47A',
                        '#F7685B',
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                      ],
                      borderWidth: 1
                }]
            }}
            height={50}
            width={100}
             />
        </div>
    );
}

export default piechart;