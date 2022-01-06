import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triang';

  teruletVisible=false;


  alap = new FormControl ('');
  magassag = new FormControl('');
  terulet = new FormControl('');


  onClickSzamit(){
    let alap = Number(this.alap.value);
    let magassag = Number(this.magassag.value);
    let terulet = alap*magassag/2;
    this.terulet.setValue(terulet);

    console.log(terulet);
    this.teruletVisible=true;
    
  }

}
