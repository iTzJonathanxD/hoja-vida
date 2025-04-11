import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from "../../core/services/resume-data.service"
import { trigger, style, animate, transition, query, stagger } from "@angular/animations"

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
  animations: [
    trigger("staggered", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(30px)" }),
            stagger("100ms", [animate("0.6s ease-out", style({ opacity: 1, transform: "translateY(0)" }))]),
          ],
          { optional: true },
        ),
      ]),
    ]),
    trigger("fadeIn", [transition(":enter", [style({ opacity: 0 }), animate("0.5s ease-out", style({ opacity: 1 }))])]),
  ],
})
export class EducationComponent implements OnInit {
  animatedItems: boolean[] = []

  constructor(public resumeData: ResumeDataService) {}

  ngOnInit() {
    this.animatedItems = this.resumeData.educationItems.map(() => false)
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

    // Observe each education item
    setTimeout(() => {
      const elements = document.querySelectorAll(".education-item")
      elements.forEach((el) => observer.observe(el))
    }, 100)
  }
}
