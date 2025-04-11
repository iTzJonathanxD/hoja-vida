import { Component, Input } from "@angular/core"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.scss"],
  animations: [
    trigger("slideIn", [
      state("void", style({ transform: "translateY(30px)", opacity: 0 })),
      transition(":enter", [animate("0.6s ease-out", style({ transform: "translateY(0)", opacity: 1 }))]),
    ]),
  ],
})
export class SectionTitleComponent {
  @Input() title = ""
  @Input() subtitle = ""
}
