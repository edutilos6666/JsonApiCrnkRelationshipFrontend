import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    labels: null,
    series: null,
    chartOptions: null,
    donutChartOptions: null,
    gaugeChartOptions: null,
    init() {
        set(this, 'chartOptions', {
            donut: false,
            chartPadding: 30,
            labelOffset: 50,
            labelDirection: 'explode'
        });      
        set(this, 'donutChartOptions', {
           donut: true,
           chartPadding: 10, 
           labelOffset: 20,
           labelDirection: 'implode'
        });

        set(this, 'gaugeChartOptions', {
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: true
        });

        //chart 1
        let  data = {
            labels: ['Bananas', 'Apples', 'Grapes'],
            series: [20, 15, 40]
        };

        let options = {
            labelInterpolationFnc: function(value) {
              return value[0]
            }
        };

        let responsiveOptions = [
            ['screen and (min-width: 640px)', {
              chartPadding: 30,
              labelOffset: 20,
              labelDirection: 'explode',
              labelInterpolationFnc: function(value) {
                return value;
              }
            }],
            ['screen and (min-width: 1024px)', {
              labelOffset: 10,
              chartPadding: 20
            }]
        ];

        set(this, 'type', 'pie');
        set(this, 'data', data);
        set(this, 'options', options);
        set(this, 'responsiveOptions', responsiveOptions);


        //chart 2
        data = {
            series: [10, 20, 50, 20, 5, 50, 15],
            labels: [1, 2, 3, 4, 5, 6, 7]
        };

        options = {
            donut: true,
            showLabel: false
        };


        set(this, 'type2', 'pie');
        set(this, 'data2', data);
        set(this, 'options2', options);
        set(this, 'animatePieChart2', true);

          
          
    }
});
