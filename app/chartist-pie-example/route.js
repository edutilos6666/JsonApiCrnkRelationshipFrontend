import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
    beforeModel() {
        set(this, 'labels', []);
        set(this, 'series', []);
    },
    async model() {
        const labels = get(this, 'labels');
        const series = get(this, 'series');
        const chartDataPie = await this.store.findAll('chartdata-piechart');
        chartDataPie.forEach(chartData=> {
            console.log(chartData);
            labels.push(get(chartData, 'label'));
            series.push(get(chartData, 'content'));
        });
        return {
            chartData: {
                labels: labels, 
                series: series
            }
        }
    }
});
