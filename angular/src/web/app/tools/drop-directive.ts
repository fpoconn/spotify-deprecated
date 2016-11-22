import {Directive, ElementRef, Renderer, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[myDroppable]',
    host: {
        '(dragleave)': 'onDragLeave($event)',
        '(dragenter)' : 'onDragEnter($event)',
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'handleDrop($event)'
    }
})
export class DropDirective {
    
    @Output() dropped: EventEmitter<any> = new EventEmitter();

    constructor(private renderer: Renderer, private _elemenetRef: ElementRef) {}

    onDragOver(ev){
        console.log("Drag Over event target");
        //console.log(ev.target);
        console.log(ev.target.getAttribute("id"));

        //console.log("Drop Event:");
      //  console.log(event);
        // div > table
        //console.log(this._elemenetRef);
        //if(ev.srcElement != ev.target) {
            this._elemenetRef.nativeElement.classList.add('drag-over');
            ev.dataTransfer.dropEffect = "copy";
        //}
        ev.preventDefault();
    }

    onDragEnter(ev){
        ev.dataTransfer.dropEffect = 'copy';
    }

    onDragLeave(ev){
        this.clearDropHint();
    }

    handleDrop(event){
        this.clearDropHint();
        console.log("Drop Target Id");
        console.log(event.target.id);

        let data = event.dataTransfer.getData('Text');
        console.log(event);
        this.dropped.emit(JSON.parse(data));

    }

    clearDropHint(){
        this._elemenetRef.nativeElement.classList.remove('drag-over');
    }
}