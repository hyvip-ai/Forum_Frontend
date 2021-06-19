import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  mydata:any = null
  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(res=>{
      this.mydata = res
      console.log(res)
      if(this.mydata.messege=='Login Success')
      {
        console.log(this.mydata.token)
        localStorage.setItem('token',this.mydata.token)
        setTimeout(() => {
            this.router.navigate(['/home/feed'])
        }, 3000);
      }
      else{
        setTimeout(() => {
          this.mydata = null
        }, 3000);
      }

    })
  }
  gotoregi(){
    this.router.navigate(['/Register'])
  }


}
