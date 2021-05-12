import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';




@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snackbar-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px',
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px',
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Heey there'
  //msg de teste

  snackVisibility: string = 'hidden'
  constructor(private  notificationService: NotificationService) { }

  ngOnInit() {
    // Função q atribui a msg dentro do card e verifica se está visil o hidden
    this.notificationService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible'
      Observable.timer(2000).subscribe(timer => this.snackVisibility = 'hidden');
    })
  }

  // toggleSnack() {
  //   this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden'

  // }
  //function teste snackBar visibility
}
