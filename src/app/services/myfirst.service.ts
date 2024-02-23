import { Injectable } from '@angular/core';

@Injectable()
export class MyfirstService {

  messages: Array<any> = [];

  constructor() { 
    this.Init();
  }

  Init(): void {
    this.insert({
      name:'john',
      email:'john@gmail.com',
      message:'hello world'
    });
    this.insert({
      name:'johan',
      email:'johan@gmail.com',
      message:'hello i am the world'
    });
    this.insert({
      name:'alibu',
      email:'alibu@gmail.com',
      message:'hello i am alibuworld'
    });
  }


   insert(message:{name:string, email:string, message:string}): void{
     this.messages.push(message);
   }

   getAllMessages():any[] {
    return this.messages;
   }
    deleteMessage(index: number): void{
      this.messages.splice(index);
    }
   
}

