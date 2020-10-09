import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnChanges {

  automatico:boolean = true;
  filter:string = '';

  @Input() dataList:any[] = [];
  @Input() url:string;

  filteredDataList:any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes.dataList) {
      this.filteredDataList = this.dataList;
    }
  }

  filtrar() {
    if(this.filter == '') {
      this.filteredDataList = this.dataList;
      return;
    }; 

    this.filteredDataList = this.dataList.filter(elemento => {
      const prop = elemento.title ? 'title' : 'name';
      return elemento[prop].toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  validarEnter(evento) {
    if(evento.key === 'Enter') {
      this.filtrar();
    }
  }

}
