import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: "",
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])

  ]
})
export class UserModule { }
