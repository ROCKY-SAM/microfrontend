# microfrontend

single-spa  A javascript router for front-end microservices

![image](https://user-images.githubusercontent.com/12700182/116838712-0be3a800-abed-11eb-91a8-785465b7ddf0.png)

npm install -g create-single-spa

npx create-single-spa

Add to package.json
"@angular-builders/custom-webpack": "^8",
	
	
Add to routing(angular)

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
