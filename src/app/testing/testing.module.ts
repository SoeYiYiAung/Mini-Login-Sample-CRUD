import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing.component';
import { TestingRoutingModule } from './testing-routing.module';



@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
