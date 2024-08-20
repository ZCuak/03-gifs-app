import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required')
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';


  onLoad(){
    console.log('Image Loaded')
    this.hasLoaded = true;
  }
}
