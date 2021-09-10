import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() margin: string = '';
  @Input() text: string = '';
  @Input() backgroundcolor: string = '';
  @Input() color: string = '';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() fontsize: string = '';
  @Input() icon?: IconProp;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
