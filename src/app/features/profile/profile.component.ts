import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from "../../core/services/resume-data.service"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  animations: [
    trigger("fadeInUp", [
      state("void", style({ transform: "translateY(40px)", opacity: 0 })),
      transition(":enter", [animate("0.8s ease-out", style({ transform: "translateY(0)", opacity: 1 }))]),
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  animationState = "inactive"

  constructor(public resumeData: ResumeDataService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animationState = "active"
    }, 100)
  }
}
