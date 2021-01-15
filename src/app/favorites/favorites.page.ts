import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service'



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {   
  
  //on déclare une propriété tableau vide au début
  photoList = [];
    
      constructor(private storageService:StorageService) {}      
    
      ngOnInit(){
/*
        this.storageService.getFavPhotos().then( (fav) => {
          console.log('données récupérées du storage',fav);
           }); */
      }

      ionViewWillEnter(){
        this.storageService.getFavPhotos().then((fav) => {
          this.photoList = fav;
          console.log('ionViewWillEnter',fav)
        });
      }

}


