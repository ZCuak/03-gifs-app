import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrl: './gifs-cards.component.css'
})
export class GifsCardsComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
  }
  @Input()
  public gif!: Gif;


}
