import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataDeviceService} from '../../services/data-device.service';
import {MatPaginator} from '@angular/material';
import {DataResponse} from '../../models/response';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrls: ['./table-device.component.css']
})
export class TableDeviceComponent implements OnInit, AfterViewInit {
  public allDevice: {};
  public totalElements: number;
  public totalPages: number;
  // public currentPage = 0;
  // public pageSize = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    public service: DataDeviceService
  ) {
  }

  // public handlePage(e: any) {
  //   this.currentPage = e.pageIndex;
  //   console.log(this.currentPage);
  //   this.pageSize = e.pageSize;
  //   this.iterator();
  // }
  //
  // private iterator() {
  //   const end = (this.currentPage + 1) * this.pageSize;
  //   const start = this.currentPage * this.pageSize;
  //   // const part = this.array.slice(start, end);
  //   // this.dataSource = part;
  // }
  //

  ngOnInit() {
    // this.service.getAllDevice(this.currentPage, this.pageSize).subscribe((item: DataResponse) =>
    //   this.allDevice = item.content);
    // this.getCountOfElement();
  }

  ngAfterViewInit() {
    // this.allDevice.paginator  =  this.paginator;
  }
  //
  // getCountOfElement() {
  //   this.service.getAllDevice(this.currentPage, this.pageSize).subscribe((item: DataResponse) => {
  //     this.totalElements = item.totalElements;
  //     this.totalPages = item.totalPages;
  //   });
  // }
}
