import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5 class="text-dark">Buscar: </h5>
    <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs.."
    (keydown.Enter)="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent{
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>

  constructor(private gifService:GifsService) { }

  searchTag():void {
    const tagInput = this.tagInput.nativeElement.value;
    this.gifService.searchTag(tagInput);
    this.tagInput.nativeElement.value = "";
  }

}
