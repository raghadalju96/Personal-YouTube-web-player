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
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  retrieveData(event: Event) {
    console.log(this.searchField);

    this.data.getVideos(this.searchField).subscribe((data) => {
      this.videoData = data;
      console.log(this.videoData);
      this.videos = this.videoData.items;
      console.log(this.videos);
      this.getData = true;
    });
  }
}
