import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FormsModule } from '@angular/forms';


import '@angular/common/locales/global/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
    // faz a mesma coisa que acima, porém utilizando serviços
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingService: SettingsService) => settingService.getLocale()
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
