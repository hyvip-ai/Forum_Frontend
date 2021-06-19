import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myqueries',
  templateUrl: './myqueries.component.html',
  styleUrls: ['./myqueries.component.css']
})
export class MyqueriesComponent implements OnInit {

  constructor(private service:UserService) { }
  queries:any = null
  ngOnInit(): void {

    this.service.myqueries().subscribe(res=>{
      console.log(res)
      this.queries = res
      // for(let item of this.queries.messege){
      //   item.time = item.time*1000
      // }
    
    })
  }
  delete(id:any){
    this.service.deletemyquery(id).subscribe(res=>{
      console.log(res)
    })
  }

}
