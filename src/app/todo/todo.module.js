import angular from 'angular';
import todosDirective from './todos.directive'

const ngModule = angular.module('todo', []);

ngModule.directive('todos',todosDirective);

module.exports = ngModule;
