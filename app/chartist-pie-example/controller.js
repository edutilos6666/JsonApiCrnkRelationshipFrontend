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
    }
});
