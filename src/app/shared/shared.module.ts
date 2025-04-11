import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SectionTitleComponent } from "./components/section-title/section-title.component"
import { SkillBarComponent } from "./components/skill-bar/skill-bar.component"

@NgModule({
  declarations: [SectionTitleComponent, SkillBarComponent],
  imports: [CommonModule],
  exports: [SectionTitleComponent, SkillBarComponent],
})
export class SharedModule {}
