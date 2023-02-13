import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/posts-app/definitions/post';
import { PostsFacade } from '../../+state/postsFacade';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  posts$ = this.postsFacade.post$;
  
  constructor(private postsFacade: PostsFacade,) { }

  ngOnInit(): void {
    this.postsFacade.getPosts();
  }

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
