import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infromation-popup',
  standalone: true,
  imports: [],
  templateUrl: './infromation-popup.component.html',
  styleUrl: './infromation-popup.component.css'
})
export class InfromationPopupComponent {

  @Input() text:string=""
  

  change(t:string){
    this.text=t
  }

  



}
