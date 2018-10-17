import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
    beforeModel() {
        set(this, 'labels', []);
        set(this, 'series', []);
    },
    async model() {
        const labels = get(this, 'labels');
        let series = get(this, 'series');
        let tmp = [];
        const chartDataBar = await this.store.findAll('chartdata-linechart');
        chartDataBar.forEach(chartData=> {
            labels.push(get(chartData, 'label'));
            series.push(get(chartData, 'content'));
        });
        series = [series.map(arr => arr[0])];
        console.log(series);
        // tmp = tmp[0].map((col, i) => tmp.map(row => row[i]));
        // tmp.forEach(row=> series.push(row));
        // console.log(tmp);
        return {
            chartData: {
                labels: labels, 
                series: series
            }
        }
    }
});
