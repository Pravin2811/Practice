import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = '';
  reversedText = '';

  onClickReverse () {
    this.reversedText = this.text.split('').reverse().join('');
  }

}
