import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, ViewEncapsulation} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Course1 {
  name: string;
  semesters?:number;
  children?: Course1[];
}



const TREE_DATA: Course1[] = [
  {
    name: "C#",
    semesters:3,
    children: [
      { name: "oop" },
      { name: "Desine patteren" },
    ],
  },
  {
    name: "Angular",
    semesters:1,
    children: [
      { name: "angular" },
    ],
  },
  {
    name: "Java",
    semesters:2,
    children: [
      { name: "Basic" },
      { name: "project" },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  semesters: number;
}


@Component({
  selector: 'app-show-courses',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.css'
})

export class ShowCoursesComponent {
  private _transformer = (node: Course1, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      semesters: node.semesters ||0,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,

  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}