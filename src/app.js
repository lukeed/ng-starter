/* global document */
import angular from 'angular';
import router from 'angular-ui-router';
import Components from './components';
import App from './components/app';
import Common from './common';
import 'angular-component';
// import 'normalize.css'
const doc = document;

angular
	.module('app', [
		router,
		Common.name,
		Components.name
	])
	.component('app', App);

doc.addEventListener('DOMContentLoaded', () => {
	angular.bootstrap(doc, ['app']);
});
