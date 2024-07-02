import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h1>Todo App</h1>
  <div>
    <label>Work</label>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <hr>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
`
})
export class AppComponent {
  work: string = "";
  todos: string[] = []
  save() {
    this.todos.push(this.work)
  }
}
