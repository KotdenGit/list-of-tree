import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  imports: [TreeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'list-tree-app';
}
