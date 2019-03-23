import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { HttpFactory } from './service/httpservice/http';
@NgModule({
  declarations: [Header,Footer],
  imports: [
    BrowserModule
  ],
  providers: [
    HttpFactory
  ],
  exports: [
    Header,Footer
  ]
})
export class SharedModule {}
