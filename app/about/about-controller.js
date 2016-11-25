export default class AboutController{
  constructor(){
  }
  $routerOnActivate(toRoute, fromRoute) {
    this.name = toRoute.params.name;
  };
}

