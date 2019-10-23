import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { UsnewsComponent } from './usnews/usnews.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: '', component: HeadlinesComponent,
  },
  {
    path: 'sports', component: SportsComponent,
  },
  {
    path: 'technology', component: TechnologyComponent,
  },
  {
    path: 'business', component: BusinessComponent,
  },
  {
    path : 'entertainment', component: UsnewsComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadlinesComponent,
    SportsComponent,
    BusinessComponent,
    TechnologyComponent,
    EntertainmentComponent,
    UsnewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
