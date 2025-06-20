import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'list-tree-app';
  treeData = {
    name: 'Root',
    children: [
      { name: 'Child 1' },
      {
        name: 'Child 2',
        children: [{ name: 'Grandchild 1' }, { name: 'Grandchild 2' }],
      },
    ],
  };
}
