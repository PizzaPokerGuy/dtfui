import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'dtf-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DTFDebounceSearchComponent {
  @Input() public searchTerm = '';
  @Input() public placeholder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    });
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}