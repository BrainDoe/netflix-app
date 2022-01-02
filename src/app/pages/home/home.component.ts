import { ListsService } from './../../services/lists.service';
import { List, MovieContent } from './../../components/models/list.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() type: string = 'series'

  movieList: MovieContent[] = [];
  moviesList: List[] = [];

  constructor(private listsService: ListsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listsService.getListRandomWithQuery().subscribe((list: List[]) => {
      this.moviesList = list
      list.map((list: List) => {
        this.movieList = list.content
      })
      // list.map(list => list.content?.map((list: MovieContent) => this.movieList = list))
      // console.log(list)
    })
    // console.log(this.route.url);
  }

}
