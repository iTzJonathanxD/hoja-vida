import { Component } from "@angular/core"
import { ResumeDataService } from "../../services/resume-data.service"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("0.8s ease-out", style({ opacity: 1 }))]),
    ]),
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear()

  constructor(public resumeData: ResumeDataService) {}
}
