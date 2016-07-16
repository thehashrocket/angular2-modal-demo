import { Component } from '@angular/core';
import { DetailsHolderComponent } from './details-holder'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DetailsHolderComponent]
})
export class AppComponent {
  title = 'app works!';
  hideModal = true;
  displayStatus = 'none';

  onToggle(){
    if (this.hideModal === true) {
      this.displayStatus = 'block';
      this.hideModal = false;
      console.log('in if');
    } else {
      console.log('in else');
      this.displayStatus = 'none';
      this.hideModal = true;
    }
  }

  onNotify(message:string):void {
    this.hideModal = true;
    this.displayStatus = 'none';
    console.log('in notify');
  }

}
