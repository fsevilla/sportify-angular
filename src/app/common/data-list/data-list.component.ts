import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  automatico:boolean = true;
  filter:string = '';

  dataList:any[] = [
    {url: '#', title: 'sample'}
  ];

  fileredDataList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fileredDataList = this.dataList;
  }

  filtrar() {
    console.log('Vamos a buscar: ', this.filter);
    if(this.filter == '') {
      this.fileredDataList = this.dataList;
      return;
    }; 

    this.fileredDataList = this.dataList.filter(elemento => {
      return elemento.title.includes(this.filter);
    });
  }

  validarEnter(evento) {
    if(evento.key === 'Enter') {
      this.filtrar();
    }
  }

}
