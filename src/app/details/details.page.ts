import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotosService } from "../services/photos.service";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  //on récupère la route active pour le paramètre id
  //on récupère notre photos service
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotosService,
    private storageServ: StorageService
  ) {}

  // on définit l'index du tableau de photo à 0
  photoIndex = 0;
  // on déclare notre élément pour l'utiliser dans la page de détails
  photoDetails = this.photoService.data[this.photoIndex];

  addedToFav = false //Par défaut l'image n'est pas favorite
  //Le tableau des favoris est vide au départ

  favArray = [];
  // c'est la méthode d'ajout qui récupère les données en mémoire
  //avant d'ajouter la photo dans le tableau

  async addFav() {
    //on vérifie le tableau des favoris
    let data = await this.storageServ.getFavPhotos();
    //on charge le tableau dans un conteneur sur la page
    //on vérifie si les fav sont null ou pas
    if (!data) data = [];
    // je peux ajouter en faisant un push
    data.push(this.photoDetails);
    //je mets à jour les données des favoris
    this.storageServ.setFavPhotos(data);
    this.addedToFav = true;
    console.log("Added to fav !",data);
  }

  async removeFromFav(id){
    const index = await this.storageServ.getFavById(id);
    const data = await this.storageServ.getFavPhotos();
    data.splice(index,1);
    this.storageServ.setFavPhotos(data);
    this.addedToFav = false;
    console.log("removed from fav", data);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      //on recherche l'index du tableau de photos correspondant à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(
        (item) => item.id == params.id
      );
      //on doit réaffecter les données de la photo correspondant à l'index
      this.photoDetails = this.photoService.data[this.photoIndex];
      //on recherche si cette photo est présente dans les favoris
      this.storageServ.getFavById( params.id ).then((index) => {
        console.log('La photo est déjà dans les favoris ?', index);
        if (index!=-1) this.addedToFav = true;
      })
    });
  }
}
