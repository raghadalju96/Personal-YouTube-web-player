import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getVideos() {
    const ApiKey = 'AIzaSyCieviARzYfzYbmgqjmEllDSfwzT2qWnKQ';
    const URL =
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=Rashid almajeed&key=';
    let res = this.http.get(URL + ApiKey).subscribe(console.log);
    //  console.log(res);
  }
}
