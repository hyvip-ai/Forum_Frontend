import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/nav/home/home.component';
import { NewsComponent } from './components/nav/news/news.component';
import { PublishqueryComponent } from './components/nav/publishquery/publishquery.component';
import { NotificationComponent } from './components/nav/notification/notification.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AnswerComponent } from './components/nav/answer/answer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyqueriesComponent } from './components/nav/myqueries/myqueries.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NewsComponent,
    PublishqueryComponent,
    NotificationComponent,
    LoginComponent,
    RegisterComponent,
    AnswerComponent,
    MyqueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
   HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
