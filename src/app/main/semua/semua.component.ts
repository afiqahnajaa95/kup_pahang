import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semua',
  templateUrl: './semua.component.html',
  styleUrls: ['./semua.component.css']
})

export class SemuaComponent {
  _ref:any;

  Deleteplan(){
    this._ref.destroy();
  }
}
