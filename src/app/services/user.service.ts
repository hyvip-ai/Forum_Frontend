import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(body:any){
    return this.http.post('http://localhost:3000/api/register',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json'
      })
    })
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json'
      })
    })
  }

  postquery(body:any){
    var token:any = localStorage.getItem('token');
    return this.http.post('http://localhost:3000/api/postquery',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  getfeeddata(){
    var token:any = localStorage.getItem('token');
    return this.http.get('http://localhost:3000/api/getfeed',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  myqueries(){
    var token:any = localStorage.getItem('token');
    return this.http.get('http://localhost:3000/api/myqueries',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  getquestiondetails(id:any){
    var token:any = localStorage.getItem('token');
    return this.http.get(`http://localhost:3000/api/questiondetail/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }
  answerquery(id:any,data:any){
    var token:any = localStorage.getItem('token');
    return this.http.post(`http://localhost:3000/api/answerquery/${id}`,data,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  // /myanswers/:id
  getanswers(id:any){
    var token:any = localStorage.getItem('token');
    return this.http.get(`http://localhost:3000/api/myanswers/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  giveupvote(id:any){
    var token:any = localStorage.getItem('token');
    return this.http.get(`http://localhost:3000/api/rightpost/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  givedownvote(id:any){
    var token:any = localStorage.getItem('token');
    return this.http.get(`http://localhost:3000/api/wrongpost/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

  getnews(){
    return this.http.get('http://api.mediastack.com/v1/news?access_key=0defb8379eb87f2af7ae7d9bb60c973a&categories=technology,science')
  }
  deletemyquery(id:any){
    var token:any = localStorage.getItem('token');
    return this.http.get(`http://localhost:3000/api/delete/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'cotent-type':'Application/json',
        'auth':token
      })
    })
  }

}
