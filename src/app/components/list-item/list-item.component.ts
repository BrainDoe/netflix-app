import { Router } from '@angular/router';
import { ListsService } from './../../services/lists.service';
import { Component, Input, OnInit } from '@angular/core';
import { MovieContent } from '../models/list.model';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() index: number | any;
  @Input() item: MovieContent | any
  isHovered: boolean = false;
  movie!: Movie

  constructor(private listService: ListsService, private router: Router) { }

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie() {
    this.listService.getMovie(this.item).subscribe((movie: Movie) => {
      this.movie = movie
    })
  }

  goWatch() {
    this.router.navigateByUrl('/watch', {state: this.movie})
  }

  hovered() {
    this.isHovered = true;
  }

  unHovered() {
    this.isHovered = false
  }

}
