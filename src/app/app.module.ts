import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

// Routes
import { routes } from './app.routes';

// Services
import { routeActivatorService } from './services/route-activator.service'; 
import { KeyService } from './services/keys.service';

import { AppComponent } from './app.component';
import { RegularObservableComponent } from './regular-observable/regular-observable.component';
import { FlatmapComponent } from './flatmap/flatmap.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';
import { Error404Component } from './error404/error404.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    RegularObservableComponent,
    FlatmapComponent,
    TestComponent, 
    MenuComponent,
    HomeComponent,
    SecretComponent,
    Error404Component,
    SubjectComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule
  ],
  providers: [KeyService, routeActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
