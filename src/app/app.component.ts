import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Master Class : Assignment 1 Calculator App";
  val1: any;
  val2: any;
  val3: any;
  op: string = "op";

  calculate(x) {
    let a = parseInt(this.val1);
    let b = parseInt(this.val2);
    let c = 0;
    switch (x) {
      case 1:
        c = a + b;
        this.op = "+";
        break;
      case 2:
        c = a - b;
        this.op = "-";
        break;
      case 3:
        c = a * b;
        this.op = "x";
        break;
      case 4:
        c = a / b;
        this.op = "%";
        break;
    }
    this.val3 = c;
  }
  clear() {
    this.val1 = "";
    this.val2 = "";
    this.val3 = "";
    this.op = "op";
  }
}
