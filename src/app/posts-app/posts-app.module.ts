import { FooterComponent } from './../posts-app/components/footer/footer.component';
import { HeaderComponent } from './../posts-app/components/header/header.component';
import { PostsEffects } from './+state/posts.effects';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppPageOutletComponent } from './components/app-page-outlet/app-page-outlet.component';
import { HomeComponent } from './pages/home/home.component';
import { postsReducer } from './+state/posts.reducers';
import { PostsAppRoutingModule } from './postsApp-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from  '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { PostsTableComponent } from './pages/home/components/posts-table/posts-table.component';
import { MatListModule } from '@angular/material/list';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
@NgModule({
  declarations: [
    HomeComponent,
    AppPageOutletComponent,
    SidenavComponent,
    PostsTableComponent,
    MenuBarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('postsState', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    PostsAppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppPageOutletComponent, HomeComponent],
  exports: [
    PostsAppRoutingModule
  ]
})
export class PostsAppModule { }
