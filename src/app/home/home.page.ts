import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user={
    name:'Usman',
    city: 'Sahiwal',
    interests:['coding','football','TV Serials']
  
  };
  constructor() {}

}
