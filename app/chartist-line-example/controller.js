import Controller from '@ember/controller';
import { set } from '@ember/object';


export default Controller.extend({
    chartOptions: null,
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
        
    }
});
