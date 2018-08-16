import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbCarouselModule.forRoot(),
    BrowserModule,
    UiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
