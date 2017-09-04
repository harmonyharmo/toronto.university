import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { SearchService } from './search.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [SearchBoxComponent, SearchResultComponent],
  exports: [SearchBoxComponent, SearchResultComponent],
  providers: [SearchService]
})
export class SearchModule {
}
