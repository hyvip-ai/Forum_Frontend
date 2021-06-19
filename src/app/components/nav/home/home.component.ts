import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private activatedroutes:ActivatedRoute,private services:UserService) { }
  queries:any = null
  ngOnInit(): void {
    this.services.getfeeddata().subscribe(res=>{
      console.log(res)
      this.queries = res
      for(let item of this.queries.messege){
        item.time = item.time*1000
        
      }
    })

  }

}
