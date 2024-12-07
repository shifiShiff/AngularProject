import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextToPicturePipe } from "../../pipes/text-to-picture.pipe";


@Component({
  selector: 'app-icons-from-text',
  standalone: true,
  imports: [FormsModule, TextToPicturePipe],
  templateUrl: './icons-from-text.component.html',
  styleUrl: './icons-from-text.component.css'
})
export class IconsFromTextComponent {


  public text:string=""
}
