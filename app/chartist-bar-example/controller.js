import Controller from '@ember/controller';
import { set } from '@ember/object';


export default Controller.extend({
    labels: null,
    series: null,
    chartOptions: null,
    times: function(n) {
        return Array.apply(null, new Array(n));
    },
    scatterData: null,
    scatterOptions: null,
    scatterResponsiveOptions: null,
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
        
        let data = this.times(52).map(Math.random).reduce(function(data, rnd, index) {
            data.labels.push(index + 1);
            data.series.forEach(function(series) {
              series.push(Math.random() * 100)
            });
        return data;
        }, {
        labels: [],
        series: this.times(4).map(function() { return new Array() })
        }); 


        let options = {
            showLine: false,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 13 === 0 ? 'W' + value : null;
              }
            }
        };
        let responsiveOptions = [
        ['screen and (min-width: 640px)', {
            axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 4 === 0 ? 'W' + value : null;
            }
            }
        }]
        ];

        set(this, 'scatterData', data);
        set(this, 'scatterOptions', options);
        set(this, 'scatterResponsiveOptions', responsiveOptions);


        // chart 2
        let labels =  ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'];
        let series = [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ];

        data = {
            labels: labels,
            series: series
        };

        options = {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
                }
            }
        };

        set(this , 'type2', 'bar');
        set(this, 'data2', data);
        set(this, 'options2', options);



        //chart 3
        data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
              [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };    

        options = {
            seriesBarDistance: 10
        };

        responsiveOptions = [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                }
              }
            }]
        ];

        set(this, 'type3', 'bar');
        set(this, 'data3', data);
        set(this, 'options3', options);
        set(this, 'responsiveOptions3', responsiveOptions);


        // chart 4
        data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ] 
        };
        options = {
            high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
        };

        set(this, 'type4', 'bar');
        set(this, 'data4', data);
        set(this, 'options4', options);

        set(this, 'fancyBarChart2', false);
        set(this, 'fancyBarChart3', false);
        set(this, 'fancyBarChart4', true);



        //chart 5
        data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                [800000, 1200000, 1400000, 1300000],
                [200000, 400000, 500000, 300000],
                [100000, 200000, 400000, 600000]
            ]
        };
        options = {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
                }
            }
        };

        set(this, 'type5', 'bar');
        set(this, 'data5', data);
        set(this, 'options5', options);
        set(this, 'draw5', true);

    }
});
