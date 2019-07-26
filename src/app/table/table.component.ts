import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class TableComponent implements OnInit {

users:UserData[]=[];
  // displayed columns for the usertable
  displayedColumns: string[] = ['select', 'id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData | any>(true, []);

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;

  constructor( private cdref: ChangeDetectorRef, private _data:DataService) {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource();
  }

  getUsers(){
    this._data.getUsers().subscribe(
      res=>
       this.dataSource.data=res;
      },
      err=>{
        console.log(err)
  }
)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = this.users;
      this.cdref.detectChanges();
  }


  selectUsers() {

  }
  
  ngOnInit() {
 this.getUsers()
  }



}//class end.

export interface UserData{
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
  lat: string,
  lng: string
  }
  },
  phone: string,
  website: string,
  company: {
  name: string,
  catchPhrase: string,
  bs: string
  }
}


