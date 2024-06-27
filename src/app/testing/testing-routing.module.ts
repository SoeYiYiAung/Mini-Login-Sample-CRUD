import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@app/account/layout.component';
import { TestComponent } from '@app/test/test.component';


const routes: Routes = [
  {
      path: '', component: TestingComponent,
      children: [
        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
