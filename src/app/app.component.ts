/* Created by Aquariuslt on 1-1-2017.*/
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor() {
  }


  routes: Object[] = [{
    icon: 'home',
    route: '.',
    title: 'Home',
  }, {
    icon: 'library_books',
    route: 'docs',
    title: 'Documentation',
  }, {
    icon: 'color_lens',
    route: 'style-guide',
    title: 'Style Guide',
  }, {
    icon: 'view_quilt',
    route: 'layouts',
    title: 'Layouts',
  }, {
    icon: 'picture_in_picture',
    route: 'components',
    title: 'Components & Addons',
  },
  ];
}