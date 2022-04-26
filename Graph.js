import React from 'react'
import {Line} from 'react-chartjs-2'

export const Graph = () => {
    return (
        <div>
            <Line
                data={{
                    labels: [ 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель'],
                    datasets: [
                        {
                            data: [54, 53, 56, 59, 60],
                            fill: 'false',
                            label: 'Вес',
                            backgroundColor: ['red'],
                            borderColor: ['red'],
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}
