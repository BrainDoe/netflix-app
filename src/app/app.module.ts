import { JwtInterceptor } from './jwt.interceptor';
import { AuthGuard } from './gards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import {ButtonModule} from 'primeng/button';
import { FeaturesComponent } from './components/features/features.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { WatchComponent } from './pages/watch/watch.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/series', pathMatch: 'full'},
  { path: 'series', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'watch', component: WatchComponent },
  { path: '**', component: HomeComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard], children: [
  //   { path: 'watch', component: WatchComponent },
  // ] },
  // { path: 'register', component: RegisterComponent },
  // { path: '**', component: HomeComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FeaturesComponent,
    ListComponent,
    ListItemComponent,
    WatchComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
