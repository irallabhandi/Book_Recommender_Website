import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLComponent} from './header-l/header-l.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectBookNewComponent } from './select-book-new/select-book-new.component';
import { SelectGenreNewComponent } from './select-genre-new/select-genre-new.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLComponent,
    FooterComponent,
    SelectBookNewComponent,
    SelectGenreNewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRippleModule,
    MatChipsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }