import { AuthGuard } from './shared/guard/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { HomeComponent } from "./views/home/home.component";

import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "products",
    component: ProductCrudComponent,
    canActivate: [AuthGuard]
   
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
