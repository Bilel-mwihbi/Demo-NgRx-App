import { UserModule } from './user/user.module';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },  
  {
    path:"home",
    component: HomePageComponent
  },
  {
    path: 'users',
    loadChildren: () => import('../app/user/user.module').then(m => m.UserModule)
  },
  {
    path:"**",
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ 
      name: "Demo app DevTools",
      maxAge: 25, 
      logOnly: false
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
