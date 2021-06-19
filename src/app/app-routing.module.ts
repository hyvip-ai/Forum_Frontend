import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnswerComponent } from './components/nav/answer/answer.component';
import { HomeComponent } from './components/nav/home/home.component';
import { MyqueriesComponent } from './components/nav/myqueries/myqueries.component';
import { NavComponent } from './components/nav/nav.component';
import { NewsComponent } from './components/nav/news/news.component';
import { NotificationComponent } from './components/nav/notification/notification.component';
import { PublishqueryComponent } from './components/nav/publishquery/publishquery.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Login'
  }
  ,

  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'home',component:NavComponent,children:[
      {
        path:'feed',component:HomeComponent
      },
      {
        path:'publish',component:PublishqueryComponent
      },
      {
        path:'detail/:id',component:AnswerComponent
      },
      {
        path:'news',component:NewsComponent
      },
      {
        path:'notification',component:NotificationComponent
      },
      {
        path:'myqueries',component:MyqueriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
