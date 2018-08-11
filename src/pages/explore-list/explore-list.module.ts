import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExploreListPage } from './explore-list';

@NgModule({
  declarations: [
    ExploreListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExploreListPage),
  ],
})
export class ExploreListPageModule {}
