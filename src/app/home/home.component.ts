import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videoData: any;
  videos: Array<any> = [];
  getData = false;
  //searchField = new FormControl("")
  searchField = '';
  firstVideo : any
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.retrieveData()
  }

  retrieveData() {
    console.log(this.searchField);

    this.data.getVideos(this.searchField).subscribe((data) => {
      this.videoData = data;
      console.log(this.videoData);
      this.videos = this.videoData.items;
      this.firstVideo = this.videoData.items[0].id.videoId
      console.log(this.firstVideo);
      this.getData = true;
    });
  }
}
