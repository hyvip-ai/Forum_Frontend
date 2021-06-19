import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service:UserService) { }
  news:any = null
  main:any = null
  ngOnInit(): void {
    this.service.getnews().subscribe(res=>{
      console.log(res);
      this.news = res
      this.main = this.news.data;
    })
  }

}
