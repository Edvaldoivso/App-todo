import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  public taskList: Array<TaskList> = [

  ];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  publicdeleteAllTaskList() {
    const confirm = window.confirm('Deletar Tudo');

    if (confirm) {
      this.taskList = [];
    }
  }

public setEmiteTaskList(event : string){
  
 this.taskList.push({task:event , checked : false})
  
}


}
