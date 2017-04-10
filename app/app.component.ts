import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-root',  
  template: `
        <input class="form-control" type="search" 
 [formControl]="searchControl">                                               
    `
})
export class AppComponent {
  searchControl = new FormControl();


  constructor(){
      this.searchControl.valueChanges
          .filter(text => text.length >= 3)   
          .debounceTime(400)   
          .distinctUntilChanged()    
          .subscribe(value => {
            console.log(value);
      });        
  }
}
