import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component"
import { CoreModule } from "./core/core.module"
import { SharedModule } from "./shared/shared.module"
import { FeatureModule } from "./features/feature.module"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    CoreModule,
    SharedModule,
    FeatureModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
