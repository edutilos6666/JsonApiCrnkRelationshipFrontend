import Controller from '@ember/controller';
import { get, set } from '@ember/object';


export default Controller.extend({
    chartOptions: null,
    times (n) {
        return Array.apply(null, new Array(n));
    },
    init() {
        set(this, 'chartOptions', {
           high: 20,
           low: 0,
           scaleMinSpace: 2,
           onlyInteger: false,
           referenceValue: 10,
           showArea: true,
           lineSmooth: false,
           axisX: {
               showGrid: false
           },
           axisY: {
               showGrid: false
           }
        }); 
        

        let labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        let series =  [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
          ];
        set(this, 'data', {
            labels: labels,
            series: series
        });
        set(this, 'options', {
            fullWidth: true,
            chartPadding: {
              right: 40
            },
            low:0, 
            high: 10
          });

        set(this, 'type', 'line');


        //second chart
        labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        series = [
            [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
            [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
            [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
            [{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
        ];

        set(this , 'data2', {
            labels: labels,
            series: series
        });

        set(this, 'options2', {
            fullWidth: true,
            chartPadding: {
                right: 10
            },
            low: 0
        });

        set(this, 'type2', 'line');

        //third chart 
        labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        series = [
            [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
            [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
            [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
            [{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
        ];

        set(this, 'data3', {
           labels: labels,
           series: series 
        });

        set(this, 'options3', {
            fullWidth: true,
            chartPadding: {
                right: 10
            },
            lineSmooth: Chartist.Interpolation.cardinal({
                fillHoles: true,
            }),
            low: 0
        });
        set(this, 'type3', 'line');

        //fourth chart 
        const data4 = this.times(52).map(Math.random).reduce(function(data, rnd, index) {
            data.labels.push(index + 1);
            data.series.forEach(function(series) {
              series.push(Math.random() * 100)
            });
          
            return data;
          }, {
            labels: [],
            series: this.times(4).map(function() { return new Array() })
        });

        const options4 = {
            showLine: false,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 13 === 0 ? 'W' + value : null;
              }
            }
        };
          
        const responsiveOptions4 = [
        ['screen and (min-width: 640px)', {
            axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 4 === 0 ? 'W' + value : null;
            }
            }
        }]
        ];

        set(this , 'type4', 'line');
        set(this, 'data4', data4);
        set(this, 'options4', options4);
        set(this, 'responsiveOptions4', responsiveOptions4);

        //chart 5 
        labels = [1, 2, 3, 4, 5, 6, 7, 8];
        series = [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ];
        set(this, 'data5', {
            labels: labels,
            series: series
        });
        
        set(this, 'options5', {
            low: 0,
            showArea: true      
        });

        set(this, 'type5', 'line');

        //chart 6
        labels =  [1, 2, 3, 4, 5, 6, 7, 8];
        series =  [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ];
        set(this, 'data6', {
            labels: labels,
            series: series
        })
        set(this, 'options6', {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });

        set(this, 'type6', 'line');


        // chart 7
        labels =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series = [
            [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ];
        set(this, 'data7', {
           labels: labels,
           series: series 
        });
        set(this, 'options7', {
            low: 0
        });
        set(this, 'type7', 'line');
    }
});
