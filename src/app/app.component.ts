import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  styleUrl: "./app.component.css",
  template: `
  <div class="todoMain">
    <h1>Todo App</h1>
    @if(!isUpdateWorkFormActive){
     <div>
       <label>Work</label>
        <input [(ngModel)]="work">
        <button (click)="save()">Save</button>
      </div>
   }@else {
      <div>
        <label>Update Work</label>
        <input [(ngModel)]="updateWork">
        <button (click)="update()">Update</button>
      </div>
    }
    <hr>
   <div>
      <ul>
        @for(data of todos; track data){
          <li>{{data}}
            @if(!isUpdateWorkFormActive){
             <button (click)="get($index)">Update</button>
             <button (click)="Delete($index)">Delete</button>
           }
          </li>
       }
     </ul>
    </div>
  </div>
`
})
export class AppComponent {
  work: string = "";
  updateWork: string = "";
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;

  save() {
    this.todos.push(this.work);
    this.work = "";
  }
  Delete(index: number) {
    this.todos.splice(index, 1)
  }
  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index]
    this.isUpdateWorkFormActive = true
  }
  update() {
    this.todos[this.updateIndex] = this.updateWork
    this.isUpdateWorkFormActive = false
  }
}
