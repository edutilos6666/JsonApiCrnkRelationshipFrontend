import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        backToOverview() {
            this.transitionToRoute('simple-workers');
        }
    }
});
