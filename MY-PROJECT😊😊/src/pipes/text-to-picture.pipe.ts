import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToPicture',
  standalone: true
})
export class TextToPicturePipe implements PipeTransform {


// private list=["😊","😂","🎶","😘","👍","❤️","😢"]
private icons:{[key:string]:string}={
  "smile": "😊",
  "cry_from_happines":"😂",
  "music":"🎶",
  "good":"👍",
  "kiss":"😘",
  "heart":"❤️",
  "cry":"😢"

}

  transform(value: string,): any {
    return this.icons[value] || "🤔"
  }

}
