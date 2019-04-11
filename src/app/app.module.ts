import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { ListaService } from './lista.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';
import { ContadorAngularComponent } from './data-binding/contador-angular/contador-angular.component';
import { ContadorComponent } from './contador/contador.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ElvisComponent } from './elvis/elvis.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { AppBackupComponent } from './app-backup/app-backup.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { InputDirective } from './shared/input.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DataBindingComponent,
    InputPropertyComponent,
    ContadorAngularComponent,
    ContadorComponent,
    CicloComponent,
    DiretivaNgifComponent,
    NgswitchComponent,
    NgforComponent,
    NgclassComponent,
    ElvisComponent,
    NgcontentComponent,
    AppBackupComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightDirective,
    InputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ListaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
