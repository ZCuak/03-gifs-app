import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { GifsCardsComponent } from './components/gifs-cards/gifs-cards.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HomePageComponent
  ],
  providers: [
    provideHttpClient()
  ]
})
export class GifsModule { }
