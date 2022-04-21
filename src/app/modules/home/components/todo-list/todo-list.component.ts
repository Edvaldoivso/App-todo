import { Component, DoCheck, OnInit } from '@angular/core';
import { first } from 'rxjs';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorange();
  }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  publicdeleteAllTaskList() {
    const confirm = window.confirm('Deletar Tudo');

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmiteTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validatoionInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Está vazia a task quer deletar ?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorange() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
