import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewPort:CdkVirtualScrollViewport = undefined!;

  personas = Array(50000).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  primero() {
    this.viewPort.scrollToIndex(0);
  }

  medio() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }

  ultimo() {
    this.viewPort.scrollToIndex(this.personas.length);
  }
}
