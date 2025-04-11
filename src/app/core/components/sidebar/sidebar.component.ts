import { Component, OnInit } from "@angular/core"
import { SidebarService } from "../../services/sidebar.service"
import { ResumeDataService } from "../../services/resume-data.service"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          transform: "translateX(0)",
        }),
      ),
      state(
        "out",
        style({
          transform: "translateX(-100%)",
        }),
      ),
      transition("in => out", animate("300ms ease-in-out")),
      transition("out => in", animate("300ms ease-in-out")),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  navItems = [
    { label: "Perfil", target: "profile", icon: "bi-person-circle" },
    { label: "Educación", target: "education", icon: "bi-mortarboard-fill" },
    { label: "Experiencia", target: "experience", icon: "bi-briefcase-fill" },
    { label: "Proyectos", target: "projects", icon: "bi-clipboard-fill" },
    { label: "Habilidades", target: "skills", icon: "bi-gear-fill" },
  ]

  activeSection = "profile"

  constructor(
    public sidebarService: SidebarService,
    public resumeData: ResumeDataService,
  ) {}

  ngOnInit(): void {
    this.setupIntersectionObserver()
  }

  setupIntersectionObserver(): void {
    const sections = document.querySelectorAll("section[id]")

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })
  }

  scrollTo(target: string): void {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })

      if (window.innerWidth < 992) {
        this.sidebarService.close()
      }
    }
  }
}
