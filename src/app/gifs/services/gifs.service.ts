import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.intefaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];
  public gifList: Gif[] = [];
  private apiKey: string = '9KtgD2gKftt8hruJSI0klv73ECBmzJ0b';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  get tagsHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag )
    }
  }

  private saveLocalStorage(): void{
    localStorage.setItem('history',JSON.stringify(this._tagHistory));
  }

  shearchTag(tag: string): void{
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    this._tagHistory.unshift(tag.toLowerCase());
    this._tagHistory = this.tagsHistory.splice(0,10);
    console.log(this._tagHistory);
    this.saveLocalStorage();

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{ params: params})
      .subscribe( resp => {

        this.gifList = resp.data;
        console.log({gifs: this.gifList });

      })

  }

  private loadLocalStorage(): void{
    if (!localStorage.getItem('history')) return;
    console.log(localStorage.getItem('history'))
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagHistory.length === 0) return;

    this.shearchTag(this._tagHistory[0]);
  }

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
   }
}
