import angular from 'angular';
import todoModule from './todo/todo.module';
import './scss/main.scss';

const ngModule = angular.module('app', [
  todoModule.name
]);
