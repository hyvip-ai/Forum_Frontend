import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularEditorConfig} from '@kolkov/angular-editor/lib/config';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-publishquery',
  templateUrl: './publishquery.component.html',
  styleUrls: ['./publishquery.component.css']
})
export class PublishqueryComponent implements OnInit {
  editorConfig:AngularEditorConfig  = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '50',
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
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
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
  constructor(private service:UserService,private router:Router) { }
  htmlform = new FormGroup({
    question:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  gethtml(){
    console.log(this.htmlform.value)
    this.service.postquery(this.htmlform.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/home/myqueries'])
    })
  }

}
