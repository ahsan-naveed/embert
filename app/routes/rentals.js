// The store service is injected into all routes and their corresponding controllers in Ember.
// It is the main interface we use to interact with Ember Data.

import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('rental');
    }
});
