import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
    @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  constructor() {
    this.resetList();
  }

  public resetList() {
      const randomInt = Math.floor(Math.random() * Math.floor(10000));

      const newList = [];
      for (let index = 0; index < randomInt; index++) {
          newList.push(index);
      }

      // scroll to top
      this.scrollToTop();
      // make reassignment
      this.numbers = newList;
      console.log(randomInt);
      console.log(this.numbers);
      return this.numbers;
  }

    scrollToTop(): void {
      if (this.viewPort) {
          // this.viewPort.scrollToIndex(0, 'smooth');
          this.viewPort.scrollToIndex(0);
      }
    }


}
