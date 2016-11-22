import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[myDraggable]',
    host: {
        '(dragstart)': 'onDragStart($event)'
    }
})
export class DragDirective {
    
    @Input('myDraggable') data: any;
    
    constructor(private _elemenetRef: ElementRef) {
        _elemenetRef.nativeElement.setAttribute('draggable', 'true');
    }

    onDragStart(ev) {
        console.log("Drag start");
        console.log(ev.target.id);
        ev.dataTransfer.setData('Text', JSON.stringify(this.data));
        ev.dataTransfer.effectAllowed = 'copy';
    }

}