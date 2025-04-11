import { Component, Input, OnInit } from "@angular/core"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-skill-bar",
  templateUrl: "./skill-bar.component.html",
  styleUrls: ["./skill-bar.component.scss"],
  animations: [
    trigger("progressAnimation", [
      state("void", style({ width: "0%" })),
      transition(":enter", [animate("1s ease-out", style({ width: "{{ percentage }}%" }))], {
        params: { percentage: 0 },
      }),
    ]),
  ],
})
export class SkillBarComponent implements OnInit {
  @Input() name = ""
  @Input() percentage = 0
  @Input() color = "#4CAF50"

  animationState = "initial"

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = "final"
    }, 100)
  }
}
