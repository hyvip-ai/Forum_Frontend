import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  }) 
  constructor(private router:Router,private service:UserService) { }
  mydata:any = null
  ngOnInit(): void {
  }
  registerme(){
    console.log(this.registrationForm.value);
    this.service.register(this.registrationForm.value).subscribe(res=>{
      console.log(res)
      this.mydata = res

      if(this.mydata.messege=='Regisatrtion Success'){
        setTimeout(() => {
          
          this.router.navigate(['/Login'])
        }, 3000);
      }
      else{
        setTimeout(() => {
          
          this.mydata=null
        }, 3000);
      }
    })
  }

  gotologin(){
    this.router.navigate(['/Login'])
  }


}
