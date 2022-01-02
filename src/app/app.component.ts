import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'netflixapp';

  type: string | any = 'movie'
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
