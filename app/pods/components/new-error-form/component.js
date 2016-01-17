import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            if(!this.validate()) {
                return;
            }
            this.get('onSave')({
                location: this.$('#helyszin').val(),
                
                description: this.$('#leiras').val(),
            });
        }
    },
    validate() {
        var location = this.$('#helyszin').val();
        
        var description = this.$('#leiras').val();
        
        this.set('errors.location', location === '' ? 'Kötelező megadni' : '');
        
        this.set('errors.description', description === '' ? 'Kötelező megadni!' : '');
        
        return this.get('errors.location') === '' && this.get('errors.description') === '';
    }
});
