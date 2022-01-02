import { Movie } from './../models/movie.model';
import { ListsService } from './../../services/lists.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() type: string | any;

  randomContent?: Movie | any

  constructor(private router: Router, private listService: ListsService) { }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   this.type = event
    //   console.log(this.type);
    // });
    this.getRandomContent();
  }

  private getRandomContent() {
    this.listService.getRandomContent(this.type).subscribe(randomContent => {
      this.randomContent = randomContent[0]!
    })
  }

}
