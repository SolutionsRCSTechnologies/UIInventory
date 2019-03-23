import { ServerResolverService } from './services/server-resolver.service';
import { CanDeactivateGuard } from './services/canDeactivate-guard.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './Shared/sharedUtil.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { HomeService } from './home/home.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorMessageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    //MatFormFieldModule
    // BrowserAnimationsModule,
    // MatAutocompleteModule
  ],
  providers: [HomeService,ServersService, AuthGuardService, AuthServiceService, CanDeactivateGuard, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
