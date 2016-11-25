import angular from 'angular';
import '@angular/router/angular1/angular_1_router.js';

import AboutComponent from './about/about-component.js';
import MusicComponent from './music/music-component.js';
import MusicStyles from './main/main-styles.scss';
import mainTemplate from './main/main-template.html';
export default angular.module('portal', ['ngComponentRouter', AboutComponent.name, MusicComponent.name])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'portal')
    .component('portal', {
        templateUrl: mainTemplate,
        $routeConfig: [
            {path: '/', component: MusicComponent.name, name: 'Music' , useAsDefault: true },
            {path: '/about', component: AboutComponent.name, name: 'About'}
        ]
    });