import { NgModule, Optional, SkipSelf } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ProfessionalLoaderComponent } from "./components/professional-loader/professional-loader.component"
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { SidebarComponent } from "./components/sidebar/sidebar.component"
import { SharedModule } from "../shared/shared.module"

@NgModule({
  declarations: [ProfessionalLoaderComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfessionalLoaderComponent, HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
