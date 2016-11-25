import angular from 'angular';

import LoaderController from './loader-controller.js';
import LoaderTemplate from './loader-template.html';
import LoaderStyles from './loader-styles.scss';

import './loader.png';
export default angular.module('loader',[])
    .component('loader', {
        bindings:{
            loaded: '<'
        },
        controller: LoaderController,
        templateUrl: LoaderTemplate
    });
