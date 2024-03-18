import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { ShavermasComponent } from './components/shavermas/shavermas.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: "products",
    component: CategoriesComponent
  },
  {
    path: "products/pizzas",
    component: PizzasComponent
  },
  {
    path: "products/burgers",
    component: BurgersComponent
  },
  {
    path: "products/shavermas",
    component: ShavermasComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
