import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {RouterModule}   from '@angular/router';
import {AppComponent}   from './app';
import {HelloComponent} from './hello';
import {ProductsComponent} from './products';
import {TVShowsDetailComponent, TVShowsListComponent} from './tvshows';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/hello',
        pathMatch: 'full'
      },
      {
        path: 'hello',
        component: HelloComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'tvshows',
        component: TVShowsListComponent
      }
    ])
  ],
  declarations: [AppComponent, HelloComponent, ProductsComponent, TVShowsListComponent, TVShowsDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
