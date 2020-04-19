import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private components;
  private rowBuffer;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private endRow;
  private cacheBlockSize;
  rowData: any[];
  dataSource: any;
  rowCout: any;
  rrowsThisPage: any;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'ID',
        maxWidth: 100,
        valueGetter: 'node.id',
        cellRenderer: 'loadingRenderer',
      },
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }


    ];

    // this.columnDefs = [
    //   {
    //     headerName: 'ID',
    //     maxWidth: 100,
    //     valueGetter: 'node.id',
    //     cellRenderer: 'loadingRenderer',
    //   },
    //   {
    //     field: 'athlete',
    //     minWidth: 150,
    //   },
    //   { field: 'age' },
    //   {
    //     field: 'country',
    //     minWidth: 150,
    //   },
    //   { field: 'year' },
    //   {
    //     field: 'date',
    //     minWidth: 150,
    //   },
    //   {
    //     field: 'sport',
    //     minWidth: 150,
    //   },
    //   { field: 'gold' },
    //   { field: 'silver' },
    //   { field: 'bronze' },
    //   { field: 'total' },
    // ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    // this.cacheBlockSize = 20;
    // this.rowBuffer = 0;
    // this.rowSelection = 'multiple';
    // this.rowModelType = 'infinite';
    //  this.paginationPageSize = 20;
    // this.cacheOverflowSize = 2;
    //  this.maxConcurrentDatasourceRequests = 1;
    //  this.infiniteInitialRowCount = 20;
    //  this.maxBlocksInCache = 10;



    this.defaultColDef = {
      sortable:true,
      flex: 1,
      resizable: true,
      minWidth: 100
    };
    this.components = {
      loadingRenderer: function (params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="../assets/loading.png">';
        }
      },
    };



  }








  onGridReady(params) {
    console.log(this.rowData);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  //   this.http
  //     .get<any[]>(
  //       'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
  //     )
  //   of(this.rowData)
  //     .subscribe(data => {
  //       let dataSource = {
  //         rowCount: null,
  //         getRows: function (params) {
  //           console.log(
  //             'asking for ' + params.startRow + ' to ' + params.endRow
  //           );

  //           setTimeout(function () {
             
  //             console.log(data);
  //             let rowsThisPage = data.slice(params.startRow, params.endRow);
  //             let lastRow = -1;
  //             if (data.length <= params.endRow) {
  //               lastRow = data.length;
  //             }
  //             params.successCallback(rowsThisPage, lastRow);
  //           }, 1000);
  //         },
  //       };
  //       params.api.setDatasource(dataSource);
  //     });
  }

 

 
}