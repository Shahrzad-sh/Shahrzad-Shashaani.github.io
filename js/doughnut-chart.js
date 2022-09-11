var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(85,255,140)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};
var chartColorsH = {
    red: 'rgb(225,94,105)',
    orange: 'rgb(225,134,61)',
    yellow: 'rgb(225,175,83)',
    green: 'rgb(73,225,123)',
    blue: 'rgb(52,135,205)',
    purple: 'rgb(129,96,225)',
    grey: 'rgb(231,233,237)'
};

// var ctx = document.getElementById("chart-area").getContext("2d");
// var myPie = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels : ["Reading", "", "Listening", "", "Speaking", "", "Writing", ""],
//         datasets: [{
//             labels: "Reading",
//             data: [
//                 8.5,
//                 0.5,
//             ],
//             backgroundColor: [
//                 chartColors.blue,
//                 'transparent'
//             ],
//             hoverBackgroundColor: [
//                 chartColors.blue,
//                 'transparent'
//             ],
//             borderWidth: 7,
//             cutout: '90%',
//             borderRadius: 20,
//         }, {
//             labels: ["Listening", "Total"],
//             data: [
//                 0,0,
//                 7.5,
//                 1.5,
//             ],
//             backgroundColor: [
//                 'transparent',
//                 'transparent',
//                 chartColors.green,
//                 'transparent'
//             ],
//             hoverBackgroundColor: [
//                 chartColors.green,
//                 'transparent'
//             ],
//             borderWidth: 7,
//             cutout: '90%',
//             borderRadius: 20,
//         },{
//             labels: ["Speaking", "Total"],
//             data: [
//                 0,0,0,0,
//                 7.0,
//                 2.0,
//             ],
//             backgroundColor: [
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 chartColors.red,
//                 'transparent'
//             ],
//             hoverBackgroundColor: [
//                 chartColors.red,
//                 'transparent',
//             ],
//             borderWidth: 7,
//             cutout: '90%',
//             borderRadius: 20,
//         }, {
//             labels: ["Writing", "Total"],
//             data: [
//                 0,0,0,0,0,0,
//                 6.5,
//                 2.5,
//             ],
//             backgroundColor: [
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 'transparent',
//                 chartColors.orange,
//                 'transparent',
//             ],
//             hoverBackgroundColor: [
//                 chartColors.orange,
//                 'transparent',
//             ],
//             borderWidth: 7,
//             cutout: '90%',
//             borderRadius: 20,
//             tooltips: {enabled: false},
//         }],
//     },
//     options: {
//         plugins: {
//             datalabels: {
//                 formatter: (value) => {
//                     return value + '%';
//                 }
//             }
//         },
//         title: {
//             display: true,
//             text: 'IELTS (Overall 7.5)',
//             fontStyle: 'bold',
//             fontSize: 20
//         },
//         legend: {
//             display: false,
//         },
//         datasetRadiusBuffer: 0.5,
//         cutoutPercentage: 5,
//     }
// });

//
// Chart.types.Doughnut.extend({
//     name: "DoughnutTextInside",
//     showTooltip: function() {
//         this.chart.ctx.save();
//         Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
//         this.chart.ctx.restore();
//     },
//     draw: function() {
//         Chart.types.Doughnut.prototype.draw.apply(this, arguments);
//
//         var width = this.chart.width,
//             height = this.chart.height;
//
//         var fontSize = (height / 114).toFixed(2);
//         this.chart.ctx.font = fontSize + "em Verdana";
//         this.chart.ctx.textBaseline = "middle";
//         this.chart.color = "#000";
//         this.chart.textColor = "#000";
//         this.chart.backgroundColor = "#000";
//         this.chart.fillStyle = "#000";
//
//         var text = "1",
//             textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
//             textY = height / 2;
//
//         this.chart.fillStyle = "#000";
//         this.chart.ctx.fillText(text, textX, textY);
//         this.chart.ctx.fillStyle = "#000";
//         // this.chart.fillStyle = "#123123";
//     }
// });
//
// var data_sp = [{
//     value: 7,
//     color: chartColors.red
// }, {
//     value: 2,
//     color: "#123123"
// }];
// var data_ls = [{
//     value: 7.5,
//     color: chartColors.green
// }, {
//     value: 1.5,
//     color: "transparent"
// }];
// var data_rd = [{
//     value: 8.5,
//     color: chartColors.blue
// }, {
//     value: 0.5,
//     color: "transparent"
// }];
// var data_wr = [{
//     value: 6.5,
//     color: chartColors.orange
// }, {
//     value: 2.5,
//     color: "transparent"
// }];
//
// var DoughnutTextInsideChart1 = new Chart($('#myChart1')[0].getContext('2d')).DoughnutTextInside(data_sp, {
//     responsive: true
// });
// var DoughnutTextInsideChart2 = new Chart($('#myChart2')[0].getContext('2d')).DoughnutTextInside(data_ls, {
//     responsive: true
// });
// var DoughnutTextInsideChart3 = new Chart($('#myChart3')[0].getContext('2d')).DoughnutTextInside(data_rd, {
//     responsive: true
// });
// var DoughnutTextInsideChart4 = new Chart($('#myChart4')[0].getContext('2d')).DoughnutTextInside(data_wr, {
//     responsive: true
// });

var data_sp = {
    labels: [
        "Speaking",
        "",
    ],
    datasets: [
        {
            data: [7, 2],
            backgroundColor: [
                chartColors.red,
                "transparent",
            ],
            hoverBackgroundColor: [
                chartColorsH.red,
                "transparent",
            ]
        }]
};
var data_ls = {
    labels: [
        "Listening",
        "",
    ],
    datasets: [
        {
            data: [7.5, 1.5],
            backgroundColor: [
                chartColors.green,
                "transparent",
            ],
            hoverBackgroundColor: [
                chartColorsH.green,
                "transparent",
            ]
        }]
};
var data_rd = {
    labels: [
        "Reading",
        "",
    ],
    datasets: [
        {
            data: [8.5, 0.5],
            backgroundColor: [
                chartColors.blue,
                "transparent",
            ],
            hoverBackgroundColor: [
                chartColorsH.blue,
                "transparent",
            ]
        }]
};
var data_wr = {
    labels: [
        "Writing",
        "",
    ],
    datasets: [
        {
            data: [7, 2],
            backgroundColor: [
                chartColors.orange,
                "transparent",
            ],
            hoverBackgroundColor: [
                chartColorsH.orange,
                "transparent",
            ]
        }]
};

Chart.pluginService.register({
    beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 110).toFixed(5);
        ctx.font = "bold " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.bold = true;
        ctx.fillStyle = "#81265d";

        var cid = chart.id;
        var text = "", text_score = "";

        if (cid == 0){
            text = "Speaking";
            text_score = "7.0";
        }
        if (cid == 1){
            text = "Listening";
            text_score = "7.5";
        }
        if (cid == 2){
            text = "Reading";
            text_score = "8.5";
        }
        if (cid == 3){
            text = "Writing";
            text_score = "6.5";
        }

        var textX = Math.round((width - ctx.measureText(text).width) / 40),
            textY = height / 15;

        var textX_score = Math.round((width - ctx.measureText(text_score).width) / 2),
            textY_score = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.fillText(text_score, textX_score, textY_score);
        ctx.save();
    }
});

var chart = new Chart(document.getElementById('myChart1'), {
    type: 'doughnut',
    data: data_sp,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});
var chart2 = new Chart(document.getElementById('myChart2'), {
    type: 'doughnut',
    data: data_ls,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});
var chart3 = new Chart(document.getElementById('myChart3'), {
    type: 'doughnut',
    data: data_rd,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});
var chart4 = new Chart(document.getElementById('myChart4'), {
    type: 'doughnut',
    data: data_wr,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});