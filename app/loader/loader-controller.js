export default class LoaderController {
    constructor() {
        this.status = 'loader-in'
    }

    $routerOnActivate(toRoute, fromRoute) {
        console.log(toRoute);
        this.name = toRoute.params.name;
    }

    $onChanges(obj) {
        if (obj.loaded.currentValue === true) {
            this.status = 'loader-out';

        }
    }

}

LoaderController.$inject = [];
