import { Router } from '@angular/router';
import { Movie } from './../../components/models/movie.model';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieContent } from 'src/app/components/models/list.model';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
 movie: Movie | any

  constructor(private location: Location, private router: Router) { 
    this.movie = this.router.getCurrentNavigation()?.extras.state
    // console.log(this.movie);
  }

  ngOnInit(): void {
  }

}
