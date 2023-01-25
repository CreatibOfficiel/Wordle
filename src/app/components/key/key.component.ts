import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {

  constructor() { }

  @Input() key: string | undefined = 'uhuh';
  @Input() isFunctionKey: boolean = false;
  @Input() backgroundColor: string = 'light'; // or medium, warning and success

  @Output() keyClick: any = new EventEmitter();

  ngOnInit() {}

  onKeyClick() {
    this.keyClick.emit(this.key);
  }
}
