import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHelper } from './service/translateHelper';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },defaultLanguage:'fa',
            useDefaultLang:true ,
            
        }),
    ],
    exports:[TranslateModule,
        CommonModule],
    providers:[TranslateHelper]
})
export class SharedModule {
}
