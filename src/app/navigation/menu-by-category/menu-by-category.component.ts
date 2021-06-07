import { AfterViewInit, Component, OnInit } from '@angular/core';
import { $ } from 'jquery';

@Component({
  selector: 'app-menu-by-category',
  templateUrl: './menu-by-category.component.html',
  styleUrls: ['./menu-by-category.component.scss']
})
export class MenuByCategoryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    $('.dropdown-toggle').dropdown()
  }

  ngOnInit(): void {
  }

}
