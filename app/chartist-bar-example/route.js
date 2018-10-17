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
        let tmp = [];
        const chartDataBar = await this.store.findAll('chartdata-barchart');
        chartDataBar.forEach(chartData=> {
            labels.push(get(chartData, 'label'));
            tmp.push(get(chartData, 'content'));
        });
        tmp = tmp[0].map((col, i) => tmp.map(row => row[i]));
        tmp.forEach(row=> series.push(row));
        return {
            chartData: {
                labels: labels, 
                series: series
            }
        }
    }
});
