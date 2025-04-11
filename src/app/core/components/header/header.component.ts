import { Component } from "@angular/core"
import { trigger, state, style, animate, transition } from "@angular/animations"
import { SidebarService } from "../../services/sidebar.service"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("slideDown", [
      state("void", style({ transform: "translateY(-100%)" })),
      transition(":enter", [animate("0.5s ease-out", style({ transform: "translateY(0)" }))]),
    ]),
  ],
})
export class HeaderComponent {
  navItems = [
    { label: "Perfil", target: "profile", icon: "bi-person-circle" },
    { label: "Educación", target: "education", icon: "bi-mortarboard-fill" },
    { label: "Experiencia", target: "experience", icon: "bi-briefcase-fill" },
    { label: "Habilidades", target: "skills", icon: "bi-gear-fill" },
  ]

  constructor(public sidebarService: SidebarService) {}

  scrollTo(target: string): void {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}
