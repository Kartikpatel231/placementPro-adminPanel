import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {
  queryFormGroup!: FormGroup;
  messages=[
    {role:"system", "content": "You are a helpful assistant."}
  ];
  result:any;
  apiKey:string="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"
  constructor(private fb:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit() {
  this.queryFormGroup=this.fb.group({
         query:this.fb.control("")
  })
  }
  handleGpt(){
    let url="https://api.openai.com/v1/chat/completions";
    let httpHeaders=new HttpHeaders().set("Authorization",`Bearer ${this.apiKey}`);
    let payLoad={
      model:"gpt-3.5-turbo",
      messages:this.messages
    }
  this.httpClient.post(url,payLoad,{headers:httpHeaders}).subscribe({
    next:(resp)=>{
      this.result=resp;
    },
    error:(err)=>{
      console.error('API Error:', err);
    }
  });
  }

}
