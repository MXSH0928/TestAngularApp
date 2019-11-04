import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule} from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent} from '@okta/okta-angular';
import { NgModule } from '@angular/core';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogComponent } from './shared/dialog/dialog.component';

const config = {
  issuer: 'https://dev-463807.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1n5h1zle38uNYM357',
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UserComponent,
    UserDetailsComponent,
    LoginComponent,
    ContactFormComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserComponent },
      { path: 'user', component: UserDetailsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  entryComponents: [DialogComponent],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
