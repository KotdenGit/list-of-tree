import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  imports: [CommonModule],
})
export class TreeViewComponent {
  @Input() treeData: any = {
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
