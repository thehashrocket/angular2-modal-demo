import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-details-holder',
  templateUrl: 'details-holder.component.html',
  styleUrls: ['details-holder.component.css'],
  inputs: ['displayModal'],
  outputs: ['submitted']
})
export class DetailsHolderComponent implements OnInit {

  constructor() {}
  submitted = new EventEmitter<string>();
  displayModal = 'none';

  ngOnInit() {
  }

  onHideModal(){
    this.displayModal = 'none';
    this.submitted.emit('Click from nested component');
  }

}
