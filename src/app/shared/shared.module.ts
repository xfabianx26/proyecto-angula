import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule /* tengo volver cargar en este modulo  */
  ]
})
export class SharedModule { }
