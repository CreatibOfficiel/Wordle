import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {

  public _keyboardLines: string[][] = [
    [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
    ],
    [
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'
    ],
    [
      'U', 'V', 'W', 'X', 'Y', 'Z', 'DEL', 'ENTER'
    ],
  ];

  constructor() { }

  ngOnInit() {}

  onKeyClick(key: string) {
    if (key === 'DEL') {
      console.log('Delete');
    }
    if (key === 'ENTER') {
      console.log('Enter');
    } else {
      console.log('Letter : ' + key);
    }
  }

}
