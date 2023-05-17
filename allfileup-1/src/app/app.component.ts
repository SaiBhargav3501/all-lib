import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allfileup-1';

  file?:File
  onFileUploaded(file: File) {
    
    console.log(file.size);
    console.log(file.name);
    console.log(file.type);
    console.log(file.lastModified);
    console.log(file.webkitRelativePath)
  }



}
