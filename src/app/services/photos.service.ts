import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

public data = [
  {
    id: 12,
    url: '../../assets/photos/ALSP transparent.png',
    title: 'ALSP',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 23,
    url: '../../assets/photos/asul basket.png',
    title: 'ASUL',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 34,
    url: '../../assets/photos/bccl logo.jpg',
    title: 'BCCL',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 45,
    url: '../../assets/photos/clar.png',
    title: 'CLAR',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 56,
    url: '../../assets/photos/eveil de lyon.png',
    title: 'Eveil de Lyon',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 67,
    url: '../../assets/photos/LDLC_ASVEL_Basket_logo.png',
    title: 'ASVEL',
    author: 'Designer',
    description: 'Lorem Ipsum'
  },
  {
    id: 78,
    url: '../../assets/photos/logo-as-buers512.png',
    title: 'AS Buers',
    author: 'Designer',
    description: 'Lorem Ipsum'
  }
];

  constructor() { }

}
