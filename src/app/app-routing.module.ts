import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BatchInpaintComponent } from './components/batch-inpaint/batch-inpaint.component';
import { InpaintComponent } from './components/inpaint/inpaint.component';

const routes: Routes = [
  {
    path: '',
    component: InpaintComponent
  },
  {
    path: 'inpaint',
    component: InpaintComponent
  },
  {
    path: 'batch-inpaint',
    component: BatchInpaintComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
