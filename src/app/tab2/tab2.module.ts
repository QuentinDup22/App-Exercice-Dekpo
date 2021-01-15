import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ListItemComponent } from '../components/list-item/list-item.component';


import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,    
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, ListItemComponent]
})
export class Tab2PageModule {}
