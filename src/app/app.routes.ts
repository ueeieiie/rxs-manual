import { Routes, RouterModule } from '@angular/router';

// Services
import { routeActivatorService } from './services/route-activator.service';

// Components
import { HomeComponent } from './home/home.component';
import { RegularObservableComponent } from './regular-observable/regular-observable.component';
import { FlatmapComponent } from './flatmap/flatmap.component';
import { Error404Component } from './error404/error404.component';
import { SecretComponent } from './secret/secret.component';
import { SubjectComponent } from './subject/subject.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'observable', component: RegularObservableComponent}, 
    {path: 'flatmap', component: FlatmapComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'secret', component: SecretComponent /*,canActivate:[routeActivatorService]*/},
    {path: 'error404', component: Error404Component},
    {path: '**', redirectTo: 'error404'}
];

export const routes = RouterModule.forRoot(appRoutes);