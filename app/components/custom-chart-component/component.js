import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
    tagName: 'div',
    init() {
        this._super(...arguments);
        set(this, 'width', 500);
        set(this, 'height', 500);
    },
    didInsertElement() {
        this._super(...arguments);
        const type = get(this , 'type').capitalize();
        const data = get(this, 'data');
        const options = get(this, 'options') || {};
        const responsiveOptions = get(this, 'responsiveOptions') || {};
        const fancyBarChart = get(this, 'fancyBarChart') || false;
        const drawBarChart = get(this, 'draw') || false;
        console.log(fancyBarChart);
        const animatePieChart = get(this, 'animateLineChart') || false;
        const chart = new Chartist[type]('.ch-chart', data, options, responsiveOptions);
        

        if(type === 'Line') {
            this.animateLineChart(chart);
        } else if(type === 'Bar') {
            if(fancyBarChart)
                this.makeFancyBarChart(chart);
            if(drawBarChart)
                this.drawOntoBarChart(chart);
        } else if(type === 'Pie') {
            if(animatePieChart) {
                this.fnAnimatePieChart(chart);
            }
        }
    },
    fnAnimatePieChart(chart) {
        chart.on('draw', function(data) {
            if(data.type === 'slice') {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();
          
              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });
          
              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                'stroke-dashoffset': {
                  id: 'anim' + data.index,
                  dur: 1000,
                  from: -pathLength + 'px',
                  to:  '0px',
                  easing: Chartist.Svg.Easing.easeOutQuint,
                  // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                  fill: 'freeze'
                }
              };
          
              // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
              if(data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
              }
          
              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
              });
          
              // We can't use guided mode as the animations need to rely on setting begin manually
              // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
              data.element.animate(animationDefinition, false);
            }
          });
          
          // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
          chart.on('created', function() {
            if(window.__anim21278907124) {
              clearTimeout(window.__anim21278907124);
              window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
        });
    },
    drawOntoBarChart(chart) {
        chart.on('draw', function(data) {
            if(data.type === 'bar') {
              data.element.attr({
                style: 'stroke-width: 30px'
              });
            }
        });
    },
    makeFancyBarChart(chart) {
        chart.on('draw', function(data) {
            // If this draw event is of type bar we can use the data to create additional content
            if(data.type === 'bar') {
              // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
              data.group.append(new Chartist.Svg('circle', {
                cx: data.x2,
                cy: data.y2,
                r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
              }, 'ct-slice-pie'));
            }
        });
    },
    animateLineChart(chart) {
          let seq = 0,
          delays = 80,
          durations = 500;
          // Once the chart is fully created we reset the sequence
          chart.on('created', function() {
            seq = 0;
            });
    
            // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
            chart.on('draw', function(data) {
            seq++;
    
            if(data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                }
                });
            } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                }
                });
            } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                }
                });
            } else if(data.type === 'point') {
                data.element.animate({
                x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                },
                x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                },
                opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                }
                });
            } else if(data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
                };
    
                var pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
                };
    
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
                };
    
                data.element.animate(animations);
            }
            });
    
            chart.on('created', function() {
                if(window.__exampleAnimateTimeout) {
                  clearTimeout(window.__exampleAnimateTimeout);
                  window.__exampleAnimateTimeout = null;
                }
                window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
            });
    }
});
