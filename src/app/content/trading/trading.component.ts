import {Component, OnInit, OnChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {debug, log} from 'util';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  tickerControl = new FormControl();
  strategyControl = new FormControl();
  tickers: string[] = ['C (Citi)', 'APPL (Apple)', 'GOOG (Google)'];
  strategies: string[] = ['None', 'Moving Average', 'Bollinger Bands'];
  filteredTickerOptions: Observable<string[]>;
  filteredStrategyOptions: Observable<string[]>;


  ngOnInit() {


    this.filteredTickerOptions = this.tickerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.tickers, value))
    );

    this.filteredStrategyOptions = this.strategyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.strategies, value))
    );
  }

  private _filter(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().startsWith(filterValue));
  }

}
