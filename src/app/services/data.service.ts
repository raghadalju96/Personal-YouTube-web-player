import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getVideos(videoName:string) {
    const ApiKey = environment.ApiKey
    const URL =
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=';
       return this.http.get(URL+ videoName+'&key=' + ApiKey)
    
  }
}
