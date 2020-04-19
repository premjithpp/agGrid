import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 100%;"
      id="myGrid"
      class="ag-theme-alpine"
      [modules]="modules"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowSelection]="rowSelection"
      [rowDeselection]="true"
      [rowModelType]="rowModelType"
      [paginationPageSize]="paginationPageSize"
      [cacheOverflowSize]="cacheOverflowSize"
      [maxConcurrentDatasourceRequests]="maxConcurrentDatasourceRequests"
      [infiniteInitialRowCount]="infiniteInitialRowCount"
      [maxBlocksInCache]="maxBlocksInCache"
      [getRowNodeId]="getRowNodeId"
      [components]="components"
      [rowData]="rowData"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  `,
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private getRowNodeId;
  private components;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'ID',
        maxWidth: 100,
        valueGetter: 'node.id'
      },
      {
        field: 'athlete',
        suppressMenu: true,
      },
      {
        field: 'age'
      },
      {
        field: 'country'
      },
      {
        field: 'year'
      },
      { field: 'date' },
      {
        field: 'sport',
        suppressMenu: true,
      },
      {
        field: 'gold',
        suppressMenu: true,
      },
      { 
        field: 'silver',
        suppressMenu: true,
      },
      {
        field: 'bronze',
        suppressMenu: true,
      },
      {
        field: 'total',
        suppressMenu: true,
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true,
    };
    this.rowSelection = 'multiple';
    this.rowModelType = 'infinite';
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 2;
    this.getRowNodeId = function(item) {
      return item.id;
    };
    this.components = {
      loadingCellRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
        }
      },
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get<any[]>(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
      )
      .subscribe(data => {
        data.forEach(function(data, index) {
          data.id = 'R' + (index + 1);
        });
        var dataSource = {
          rowCount: null,
          getRows: function(params) {
            console.log(
              'asking for ' + params.startRow + ' to ' + params.endRow
            );
            setTimeout(function() {
              var dataAfterSorting = sortfunc(
                data,
                params.sortModel
              );
              var rowsThisPage = dataAfterSorting.slice(
                params.startRow,
                params.endRow
              );
              var lastRow = -1;
              if (dataAfterSorting.length <= params.endRow) {
                lastRow = dataAfterSorting.length;
              }
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api.setDatasource(dataSource);
      });
  }
}

function countries() {
  return [
    'United States',
    'Russia',
    'Australia',
    'Canada',
    'Norway',
    'China',
    'Zimbabwe',
    'Netherlands',
    'South Korea',
    'Croatia',
    'France',
    'Japan',
    'Hungary',
    'Germany',
    'Poland',
    'South Africa',
    'Sweden',
    'Ukraine',
    'Italy',
    'Czech Republic',
    'Austria',
    'Finland',
    'Romania',
    'Great Britain',
    'Jamaica',
    'Singapore',
    'Belarus',
    'Chile',
    'Spain',
    'Tunisia',
    'Brazil',
    'Slovakia',
    'Costa Rica',
    'Bulgaria',
    'Switzerland',
    'New Zealand',
    'Estonia',
    'Kenya',
    'Ethiopia',
    'Trinidad and Tobago',
    'Turkey',
    'Morocco',
    'Bahamas',
    'Slovenia',
    'Armenia',
    'Azerbaijan',
    'India',
    'Puerto Rico',
    'Egypt',
    'Kazakhstan',
    'Iran',
    'Georgia',
    'Lithuania',
    'Cuba',
    'Colombia',
    'Mongolia',
    'Uzbekistan',
    'North Korea',
    'Tajikistan',
    'Kyrgyzstan',
    'Greece',
    'Macedonia',
    'Moldova',
    'Chinese Taipei',
    'Indonesia',
    'Thailand',
    'Vietnam',
    'Latvia',
    'Venezuela',
    'Mexico',
    'Nigeria',
    'Qatar',
    'Serbia',
    'Serbia and Montenegro',
    'Hong Kong',
    'Denmark',
    'Portugal',
    'Argentina',
    'Afghanistan',
    'Gabon',
    'Dominican Republic',
    'Belgium',
    'Kuwait',
    'United Arab Emirates',
    'Cyprus',
    'Israel',
    'Algeria',
    'Montenegro',
    'Iceland',
    'Paraguay',
    'Cameroon',
    'Saudi Arabia',
    'Ireland',
    'Malaysia',
    'Uruguay',
    'Togo',
    'Mauritius',
    'Syria',
    'Botswana',
    'Guatemala',
    'Bahrain',
    'Grenada',
    'Uganda',
    'Sudan',
    'Ecuador',
    'Panama',
    'Eritrea',
    'Sri Lanka',
    'Mozambique',
    'Barbados',
  ];
}
function sortfunc(allOfTheData, sortModel) {
  return sortData(sortModel, allOfTheData);
}
function sortData(sortModel, data) {
  var sortPresent = sortModel && sortModel.length > 0;
  if (!sortPresent) {
    return data;
  }
  var resultOfSort = data.slice();
  resultOfSort.sort(function(a, b) {
    for (var k = 0; k < sortModel.length; k++) {
      var sortColModel = sortModel[k];
      var valueA = a[sortColModel.colId];
      var valueB = b[sortColModel.colId];
      if (valueA == valueB) {
        continue;
      }
      var sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
      if (valueA > valueB) {
        return sortDirection;
      } else {
        return sortDirection * -1;
      }
    }
    return 0;
  });
  return resultOfSort;
}
