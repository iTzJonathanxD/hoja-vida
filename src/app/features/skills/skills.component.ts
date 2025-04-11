import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from "../../core/services/resume-data.service"
import { trigger, style, animate, transition, query, stagger } from "@angular/animations"

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [
    trigger("staggered", [
      transition("* => *", [
        query(":enter", [style({ opacity: 0 }), stagger("100ms", [animate("0.6s ease-out", style({ opacity: 1 }))])], {
          optional: true,
        }),
      ]),
    ]),
    trigger("progressAnimation", [transition(":enter", [style({ width: 0 }), animate("1s ease-out")])]),
  ],
})
export class SkillsComponent implements OnInit {
  technicalVisible = false
  softVisible = false

  constructor(public resumeData: ResumeDataService) {}

  ngOnInit() {
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
          const id = entry.target.id
          if (id === "technical-skills") {
            this.technicalVisible = true
          } else if (id === "soft-skills") {
            this.softVisible = true
          }
        }
      })
    }, options)

    setTimeout(() => {
      const technical = document.getElementById("technical-skills")
      const soft = document.getElementById("soft-skills")
      if (technical) observer.observe(technical)
      if (soft) observer.observe(soft)
    }, 100)
  }
}
