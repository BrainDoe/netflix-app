import { Component, HostListener, OnInit } from '@angular/core';

import { faArrowCircleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchIcon = faSearch
  notificationIcon = faBell
  downArrowIcon = faArrowCircleDown

  isScrolled: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {
    window.onscroll = () => {
      this.isScrolled = window.scrollY === 0 ? false : true
      return () => (window.onscroll = null)
    }
  }

  // @HostListener('document:scroll')

  // scroll() {
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     this.isScrolled = true;
  //   } else {
  //     this.isScrolled = false;
  //   }
  // }

}
