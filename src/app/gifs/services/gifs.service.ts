import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];

  private apiKey = "irUZAevqKzbRdOXGa5YWP5Cu2aqz9z3X";
  private serviceUrl = "https://api.giphy.com/v1/gifs";

  constructor(private http: HttpClient) { }


  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((tags) => tags !== tag);
    }
    this._tagsHistory.unshift(tag);

    if (this._tagsHistory.length > 10) this._tagsHistory.pop();
  }

  searchTag(tag: string): void {
    if (tag.length < 3) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", 30)
      .set("q", tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log(resp.data);

      })



  }



}
