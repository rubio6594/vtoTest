import { Post } from './../../../../definitions/post';
import { Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  postsData$: Observable<Post[] | undefined> | undefined;

  defaultColumns: string[] = ['id', 'title', 'body'];
  displayedColumns: string[] = ['id', 'title', 'body'];
  matchsColumns: string[] = ['matchTitle', 'matchBody'];
  dataSource= new MatTableDataSource<Post>();
  matchs:  Map<number, number[]> = new Map<number, number[]>();

  subcriptions: Subscription = new Subscription();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  
  constructor() { }

  ngOnInit(): void {
    this.subcriptions.add(this.postsData$?.subscribe((posts) => {
      this.dataSource = new MatTableDataSource(posts);
      this.applySort();
      this.dataSource.paginator = this.paginator;
    }))
  }

  ngAfterViewInit(): void {
  }

  applySort() {
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      if (property === 'matchTitle') {
        return (this.matchs.get(item.id) || [0,0])[0];
      } else if (property === 'matchBody') {
        return (this.matchs.get(item.id) || [0,0])[1];
      } else {
        return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.matchs = new Map<number, number[]>();
    this.displayedColumns = this.defaultColumns;
    if(filterValue && filterValue !== "" ) {
      for(let post of this.dataSource.filteredData){
        const regex = new RegExp(filterValue, "gi");
        const titleMatchs = (post.title.match(regex) || []).length;
        const bodyMatchs = (post.body.match(regex) || []).length;
        this.matchs?.set(post.id, [titleMatchs, bodyMatchs]);
      }
      if(this.matchs.size > 0) {
        this.displayedColumns = [...this.defaultColumns, ...this.matchsColumns]
      }
    }
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

}
