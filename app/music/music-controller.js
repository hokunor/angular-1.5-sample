export default class MusicController {
    constructor(NgTableParams, $http) {
        let self = this;
        self.loaded = false;
        $http.get("./api/music")
            .then(function (response) {

                response.data.map((v) => {
                    v.production = new Date(v.production);
                    return v;
                });
                self.tableParams = new NgTableParams({}, {
                    dataset: response.data
                });
                self.loaded = true;
            });
    }

    $routerOnActivate(toRoute, fromRoute) {
        this.name = toRoute.params.name;
    }
}

MusicController.$inject = ['NgTableParams', '$http'];
