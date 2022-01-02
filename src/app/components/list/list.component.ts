import { List } from './../models/list.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() index!: number | any;
  @Input() list!: string | any;
  @ViewChild('listContainerRef') listContainer!: ElementRef

  isMoved: boolean = false;
  listContent: any

  constructor() { }

  ngOnInit(): void {
    this.list.content.map((list: any, index: any) => {
      this.listContent = list
      this.index = index
    })
  }

  handleClick(direction: any) {
    this.isMoved = true;
    const distance = this.listContainer.nativeElement.getBoundingClientRect().x - 50;
    if(direction === 'left' && this.index > 0) {
      this.index = this.index - 1;
      this.listContainer.nativeElement.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === 'right' && this.index < 5) {
      this.index = this.index + 1
      this.listContainer.nativeElement.style.transform = `translateX(${-230 + distance}px)`;
    }
  }

}
