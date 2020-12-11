import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title!:string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const todo={
      title:this.title,
      completed:false
    };
    this.addTodo.emit(todo);
  }

}
