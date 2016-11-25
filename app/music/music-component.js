import angular from 'angular';
import 'ng-table/bundles/ng-table.js';

import MusicController from './music-controller.js';
import MusicTemplate from './music-template.html';
import MusicStyles from './music-styles.scss';
import LoaderComponent from '../loader/loader-component';
export default angular.module('music', ['ngTable', LoaderComponent.name])
    .component('music', {
        controller: MusicController,
        templateUrl: MusicTemplate
    });
