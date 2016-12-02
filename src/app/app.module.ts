import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoursesComponent } from './course/courses.component';
import { AuthorComponent } from './author/author.component';
import { StarComponent } from './star/star.component';
import { AppComponent } from './app.component';

import { AutoGrowDirective } from './shared/auto-grow.directive'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    StarComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
