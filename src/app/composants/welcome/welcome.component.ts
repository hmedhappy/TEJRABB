import { Component, OnInit } from '@angular/core';
import {DonneeService} from '../../services/donnee.service' ;
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  FirstName : String ;
  LastName : String ;
  age : number ;
  email : String ;
  public hey = '';
  public x = 1 ;
  constructor( private donnee : DonneeService) { 
    this.FirstName = 'Ahmed' ;
    this.LastName = 'ferah' ;
    this.age = 20 ; 
    this.email = 'ahmedferah216@gmail.com';
    
  }

  ngOnInit() {
  }

  onclick(){
    alert('Aucune information pour le moment Merci') ;
  }
  onnClick(){
    this.hey = 'BIENVENUE A TOI joueur numero '+this.x ;
    if (this.x-1 == 10) { alert('WOOW t as depasser les ' + (this.x-1)) };
    if (this.x == 20) { alert('WOOW t as depasser les ' + (this.x-1))};
    if (this.x == 30) { alert('WOOW t as depasser les ' + (this.x-1)) };
    this.x += 1;

  }

}
