
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-file-upload',
  template: `
   <div>
    
    <input type="file" (change)="onFileSelected($event)"  accept=".doc,.docx,.pdf">
   
  </div>
  `,
  styles: [
  ]
})
export class FileUploadComponent {
  @Output() fileUploaded = new EventEmitter<File>();
 

  value:any
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploaded.emit(file);
  }
   
  onclickup(event:any){
    console.log("the file is uploaded")
  }

}
