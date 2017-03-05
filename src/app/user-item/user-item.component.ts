import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  /**
   * Input hace que le podamos  pasar un valor a la propiedad, desde el padre
   */
  @Input() name: string; 

  /**
   * Llamado cuando se crea
   */
  constructor() { 
  }

  ngOnInit() {
  }

}
