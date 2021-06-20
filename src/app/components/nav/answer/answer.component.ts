import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularEditorConfig} from '@kolkov/angular-editor/lib/config';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AnswerComponent implements OnInit {
  editorConfig:AngularEditorConfig  = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '300px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [

      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
     {
       name:'Code',
       class:'code',
       tag:'pre'
     }
    ],
   
    sanitize: false,
    toolbarPosition: 'top',
   
};
answerform = new FormGroup({
  answer:new FormControl('',[Validators.required])
})
  constructor(private router:Router,private service:UserService,private activatedroutes:ActivatedRoute,private domSanitize:DomSanitizer) { }
  question:any = null
  answers:any = null
  username:any = localStorage.getItem('username')
  mainanswer:boolean = false
  answerpart:boolean = false
  ngOnInit(): void {
    this.service.getquestiondetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res);
      this.question = res;
    })
    this.service.getanswers(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res);
      this.answers = res;

      
      for(let i=0;i<this.answers.data.length;i++){
   
        this.answers.data[i].answer = this.transform(this.answers.data[i].answer)
        this.mainanswer=true
      }
    })
  }

  disclose(){
    this.answerpart = true
  }
  answerit(){
    this.mainanswer=false
    this.answerpart = false
    console.log(this.answerform.value)
    this.service.answerquery(this.activatedroutes.snapshot.params.id,this.answerform.value).subscribe(res=>{
      console.log(res);
      window.location.reload();
    })
    
    
  }

  transform(html:any):SafeHtml{
    return this.domSanitize.bypassSecurityTrustHtml(html);
  }
  upvote(id:any){
    
    this.service.giveupvote(id).subscribe(res=>{
      console.log(res);
      window.location.reload();

    })
  }
  downvote(id:any){
  
    this.service.givedownvote(id).subscribe(res=>{
      console.log(res);
      window.location.reload();

      
    })

  }
 

}
