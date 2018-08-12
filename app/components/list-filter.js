import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-filter'],
    value: '',

    // seed initial listings by calling the filter action with an empty value
    init() {
        this._super(...arguments);
        this.get('filter')('').then((allResults) => this.set('results', allResults.results));
    },

    actions: {
        handleFilterEntry() {
            // when dealing with multiple concurrent tasks, consider `ember-concurrency` addon
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue)
                .then((filterResults) => {
                    if (filterResults.query === this.get('value')) {
                        this.set('results', filterResults.results);
                    }
                })
        }
    }
});
