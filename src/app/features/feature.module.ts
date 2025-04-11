import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ProfileComponent } from "./profile/profile.component"
import { EducationComponent } from "./education/education.component"
import { ExperienceComponent } from "./experience/experience.component"
import { SkillsComponent } from "./skills/skills.component"
import { ProjectsComponent } from "./projects/projects.component"
import { SharedModule } from "../shared/shared.module"

@NgModule({
  declarations: [ProfileComponent, EducationComponent, ExperienceComponent, SkillsComponent, ProjectsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent, EducationComponent, ExperienceComponent, SkillsComponent, ProjectsComponent],
})
export class FeatureModule {}
