import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
      path: 'mortgage-calculator-form',
      loadChildren: './mortgage/mortgage.module#MortgageModule',
  },
  // {
  //     path: 'products',
  //     loadChildren: '../products/products.module#ProductsModule',
  // },
  // {
  //     path: 'product',
  //     loadChildren: '../product/product.module#ProductModule',
  // },
  { path: '**', redirectTo: 'mortgage-calculator-form' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
