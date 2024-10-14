/**
 * This code was generated by Builder.io.
 */
import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-image-display",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-display.component.html",
  styleUrls: ["./image-display.component.css"],
})
export class ImageDisplayComponent implements OnInit {
  @Input() imageUrl: string =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7a362ea251ad0991311257222a59886dbda13df5b4894189d900ccb75a28168a?placeholderIfAbsent=true&apiKey=0b48fe8e354b4d2f9b80496aa2074bf7";
  @Input() imageAlt: string = "Large display image";

  windowWidth: number = 0;

  ngOnInit() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth.bind(this));
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }
}