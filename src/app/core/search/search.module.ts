import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { SearchService } from './search.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule
  ],
  declarations: [SearchBoxComponent, SearchResultComponent],
  exports: [SearchBoxComponent, SearchResultComponent],
  providers: [SearchService]
})
export class SearchModule {
}
