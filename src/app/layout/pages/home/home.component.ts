import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

	constructor() {
		// fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
		// 	.subscribe({next:(e: Event) => console.log(this.getYPosition(e))}
    //   );
    }
	// :number

  onScroll(e:Event){
    console.log(e);
  }
	
}
