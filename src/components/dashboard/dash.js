import React from "react";
import './dash.css';
import Chart from 'chart.js/auto';
import Nav from "../nav/nav";
import "node_modules/chart.js/dist/Chart.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" ;
import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js";
function Dash(){

    //bar chart
var bar = document.getElementById('bar');
bar.height = 400
var barConfig = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels: ['data-1', 'data-2', 'data-3', 'data-4', 'data-5', 'data-6', 'data-7'],
        datasets: [{
            label: '# of data',
            data: [30, 25, 20, 15, 11, 4, 2],
            backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
})
//bubble chart
var bubble = document.getElementById('bubble');
bubble.height = 200
var myBubbleChart = new Chart(bubble, {
    type: 'bubble',
    data: {
        labels: ['data-1', 'data-2', 'data-3', 'data-4', 'data-5', 'data-6', 'data-7'],
        datasets: [{
            label: '# of data',
            data: [{
                x: 20,
                y: 10,
                r: 10
            }, {
                x: 15,
                y: 5,
                r: 13
            }, {
                x: 12,
                y: 4,
                r: 8
            }, {
                x: 17,
                y: 2,
                r: 10
            }, {
                x: 10,
                y: 9,
                r: 15
            }, {
                x: 8,
                y: 8,
                r: 12
            }, {
                x: 16,
                y: 9,
                r: 8
            }],
            backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)', ]
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false,
    }
});
//doughnut chart
var doughnut = document.getElementById('doughnut');
var doughnutConfig = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['data-1', 'data-2', 'data-3'],
        datasets: [{
            label: '# of data',
            data: [11, 30, 20],
            backgroundColor: ['rgba(0, 230, 118, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255,99,132,1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }
});
//line chart
var line = document.getElementById('line');
line.height = 200
var lineConfig = new Chart(line, {
    type: 'line',
    data: {
        labels: ['data-1', 'data-2', 'data-3', 'data-4', 'data-5', 'data-6'],
        datasets: [{
            label: '# of data', // Name the series
            data: [10, 15, 20, 10, 25, 5, 10], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
})
//pie chart
var pie = document.getElementById('pie');
var pieConfig = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['data-1', 'data-2'],
        datasets: [{
            label: '# of data',
            data: [40, 80],
            backgroundColor: ['rgba(103, 216, 239, 1)', 'rgba(246, 26, 104,1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }
});
//polar area chart
var polar = document.getElementById('polar');
var polarConfig = new Chart(polar, {
    type: 'polarArea',
    data: {
        labels: ['data-1', 'data-2', 'data-3'],
        datasets: [{
            label: '# of data',
            data: [10, 20, 30],
            backgroundColor: ['rgba(0, 230, 118, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255,99,132,1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }
});
//mixed chart
var mixed = document.getElementById('mixed');
var mixedConfig = new Chart(mixed, {
    type: 'bar',
    data: {
        labels: ['data-1', 'data-2', 'data-3', 'data-4', 'data-5', 'data-6', 'data-7'],
        datasets: [{
            label: '# of data',
            data: [18, 12, 9, 11, 8, 4, 2],
            backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)'],
            borderWidth: 1
        }, {
            label: '# of data', // Name the series
            data: [20, 19, 18, 14, 12, 15, 10],
            type: 'line', // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1,
            order: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
})
    return(
        
        
        <div>
            <Nav/>
<h1>Hello Admin</h1>

   
        <div className="container">
            <main>
                <div className="dashboard-container">
                    <div className="card-1">
                        <h4 className="chart-lbl">
                            Doughnut Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="doughnut-chart-container">
                                <canvas className="doughnut-chart" id="doughnut">
                                </canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <h4 className="chart-lbl">
                            Pie Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="pie-chart-container">
                                <canvas className="pie-chart" id="pie">
                                </canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-3">
                        <h4 className="chart-lbl">
                            Polar Area
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="polar-chart-container">
                                <canvas className="polar-chart" id="polar">
                                </canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-4">
                        <h4 className="chart-lbl">
                            Bubble Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="bubble-chart-container">
                            <canvas className="bubble-chart" id="bubble">
                            </canvas>
                        </div>
                    </div>
                    <div className="card-5">
                        <h4 className="chart-lbl">
                            Bar Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="bar-chart-container">
                            <canvas className="bar-chart" id="bar">
                            </canvas>
                        </div>
                    </div>
                    <div className="card-6">
                        <h4 className="chart-lbl">
                            line Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="line-chart-container">
                            <canvas className="line-chart" id="line">
                            </canvas>
                        </div>
                    </div>
                    <div className="card-7">
                        <h4 className="chart-lbl">
                            Mixed Chart
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="mixed-chart-container">
                            <canvas className="mixed-chart" id="mixed">
                            </canvas>
                        </div>
                    </div>
                </div>
            </main>
        </div>
   
      
</div>);}
 export default Dash;