import React from 'react'
import {Line} from 'react-chartjs-2'

export const Graph = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
                    datasets: [
                        {
                            data: [12, 19, 3, 5, 2, 3],
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
