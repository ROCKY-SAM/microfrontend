# Microfrontend

## _Single-spa A javascript router for front-end microservices_

![image](https://user-images.githubusercontent.com/12700182/116838712-0be3a800-abed-11eb-91a8-785465b7ddf0.png)

# Applications types
	Angular appOne,appTwo, Navigation
	React appThree

# To install singleSPA
```sh
npm install -g create-single-spa
```

# To create singleSPA application 
```sh
npx create-single-spa
```

Configure root config application

![image](https://user-images.githubusercontent.com/12700182/116843064-66383500-abfc-11eb-8023-577c596aa6d2.png)

Create singleSPA application - React

![image](https://user-images.githubusercontent.com/12700182/116843326-3b021580-abfd-11eb-8110-06aec0554a32.png)

Create singleSPA application  - Angular
![image](https://user-images.githubusercontent.com/12700182/116843396-77357600-abfd-11eb-8456-a9a27d3f87b5.png)


# Issues need to fix in angular

## _Add to package.json_
```sh
"@angular-builders/custom-webpack": "^8",
```

## _Add to routing(angular)_

```sh

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
```

## _Uncomment in index.ejs_


```sh
  <!--
    If you need to support Angular applications, uncomment the script tag below to ensure only one instance of ZoneJS is loaded
    Learn more about why at https://single-spa.js.org/docs/ecosystem-angular/#zonejs
  -->
  <script src="https://cdn.jsdelivr.net/npm/zone.js@0.11.3/dist/zone.min.js"></script>
```

# Issues need to fix in React
```sh
  <script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
      }
    }
  </script>
  ```
