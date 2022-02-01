import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BikesComponent } from './Products/bikes/bikes.component';
import { AccessoriesComponent } from './Products/accessories/accessories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './shared/app.productService';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    AccessoriesComponent,
    HomepageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "Welcome", component : HomepageComponent},
      {path: "Bikes", component : BikesComponent},
      {path:"Accessories", component: AccessoriesComponent},
      {path:"ContactUs", component: ContactUsComponent},
      {path: "", component: HomepageComponent},
      {path: "**", component: HomepageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
