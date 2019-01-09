Todos.TodoController = Ember.ObjectController.extend({
	isEditing: false,

	editTodo: function () {
		this.set('isEditing', true);
	},

	removeTodo: function () {
		var todo = this.get('model');
		todo.deleteRecord();
		todo.save();
	},

	acceptChanges: function () {
		this.set('isEditing', false);
		this.get('model').save();
	},
	
	isCompleted: function(key, value){
		var model = this.get('model');
		if (value === undefined) {
			return model.get('isCompleted');
		} else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),
});