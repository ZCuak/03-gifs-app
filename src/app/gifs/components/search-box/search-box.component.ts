import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor (private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  shearchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.shearchTag(newTag);
    this.tagInput.nativeElement.value = '';
    
  }
}
