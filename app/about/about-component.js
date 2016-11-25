import angular from 'angular';

import AboutController from './about-controller.js';
import AboutTemplate from './about-template.html';
import AboutStyles from './about-styles.scss';

export default angular.module('about', [])
    .component("about", {
        controller: AboutController,
        templateUrl: AboutTemplate
    });
