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
        
        const data = this.times(52).map(Math.random).reduce(function(data, rnd, index) {
            data.labels.push(index + 1);
            data.series.forEach(function(series) {
              series.push(Math.random() * 100)
            });
        return data;
        }, {
        labels: [],
        series: this.times(4).map(function() { return new Array() })
        }); 


        const options = {
            showLine: false,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 13 === 0 ? 'W' + value : null;
              }
            }
        };
        const responsiveOptions = [
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
    }
});
