import { Component, inject } from '@angular/core';
import { MyfirstService } from '../services/myfirst.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css'
})
export class MyFirstCompComponent {

  name: string ='';
  email: string ='';
  message:string ='';
  isSubmitted: boolean = false;
  messages:Array<any> = [];

  constructor(private service: MyfirstService){
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length >0;
  }

  onSubmit(): any {
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email':this.email,
      'message':this.message
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) : void {
    this.service.deleteMessage(index);
  }

}
