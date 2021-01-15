import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
// on déclare une propriété tableau vide au départ
  photoList = [];

  constructor(private photoService: PhotosService, private storage:Storage) {}

  maVariable = "";
  favArray = []

  afficheVar() {
    this.favArray.push(this.maVariable);
    console.log(this.favArray);
    this.storage.set('favArray',this.favArray);
  }

  alert(id) {
    alert(id);
  }

  ngOnInit(){

    this.photoList = this.photoService.data;
    console.log(this.photoService.data);
  }

}
