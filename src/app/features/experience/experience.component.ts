import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from "../../core/services/resume-data.service"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
  animations: [
    trigger("fadeInLeft", [
      state("void", style({ transform: "translateX(-30px)", opacity: 0 })),
      transition(":enter", [animate("0.6s ease-out", style({ transform: "translateX(0)", opacity: 1 }))]),
    ]),
    trigger("expandCollapse", [
      state("collapsed", style({ height: "0", opacity: 0, overflow: "hidden" })),
      state("expanded", style({ height: "*", opacity: 1 })),
      transition("collapsed <=> expanded", animate("300ms ease-in-out")),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  expandedIndex: number | null = 0
  animatedItems: boolean[] = []

  constructor(public resumeData: ResumeDataService) {}

  ngOnInit() {
    // Initialize animation states
    this.animatedItems = this.resumeData.experiences.map(() => false)

    // Set up intersection observer for scroll animations
    this.setupIntersectionObserver()
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          this.animatedItems[index] = true
        }
      })
    }, options)

    // Observe each experience item
    setTimeout(() => {
      const elements = document.querySelectorAll(".experience-card")
      elements.forEach((el) => observer.observe(el))
    }, 100)
  }

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index
  }

  getState(index: number): string {
    return this.expandedIndex === index ? "expanded" : "collapsed"
  }
}
