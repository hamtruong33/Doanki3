import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    context: CanvasRenderingContext2D;

    @ViewChild("mycanvas") mycanvas;

    preview(e: any): void {
        let canvas = this.mycanvas.nativeElement;
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, 300, 300);

        // Show render image to canvas
        var render = new FileReader();
        render.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
            };
            img.src = event.target.result;
        };
        render.readAsDataURL(e.target.files[0]);

    }


}