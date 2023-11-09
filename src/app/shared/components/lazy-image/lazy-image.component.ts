import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  ngOnInit(): void {
    if (!this.imageUrl) throw new Error('URL property is required');
  }

  public hasLoaded: boolean = false;


  @Input()
  public imageUrl?: string;

  @Input()
  public alt?: string;


  onLoad(): void {
    setTimeout(() => {
    this.hasLoaded = true;

    }, 200);
  }


}


