import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { WorkareaComponent } from './workarea/workarea.component';

const routes: Routes = [
  {
    path: 'leftmenu',
    component: LeftmenuComponent
  },
  {
    path: 'workarea',
    component: WorkareaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
