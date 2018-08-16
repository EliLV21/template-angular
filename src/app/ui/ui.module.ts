import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincePageComponent } from './prince-page/prince-page.component';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { ArticleSliderComponent } from './article-slider/article-slider.component';
import { FormValidateComponent } from './form-validate/form-validate.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, PrincePageComponent, RelatedArticlesComponent, ArticleSliderComponent, FormValidateComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
