import React from 'react'
import {historyData} from '../../utils/type'
import { Line } from 'react-chartjs-2';
import { Chart }            from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

type LineChartProp={
    historys:historyData[],
}

const LineChart = ({historys}:LineChartProp) => {
    if(historys.length<=1){
        return<></>
    }
    console.log(historys)
    const coinPrice = historys.map((history)=>history.price)
    // const coinTimestamp = historys.map((history)=>history.timestamp)
    const coinTimestamp = historys.map((history)=>new Date(history.timestamp).toLocaleDateString())
    console.log(coinPrice)
    console.log(coinTimestamp)
    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

    return (
        <div>
                  <Line data={data}  />
            
        </div>
    )
}

export default LineChart
