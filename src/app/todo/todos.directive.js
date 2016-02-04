import todosTemplate from './todos.template.html';

export default () => {
  return {
      restrict: 'E',
      scope: {},
      template: todosTemplate,
      controllerAs: 'vm',
      controller: function() {
        const vm = this;

        vm.todoList = [
          'Buy milk',
          'Dance'
        ];
      }
  }
}
