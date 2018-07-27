import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import { saveAs } from 'file-saver';

const uri = 'http://localhost:4000/file/upload';
@Component({
  selector: 'app-kup-register',
  templateUrl: './kup-register.component.html',
  styleUrls: ['./kup-register.component.css'],
  providers:[FileService]
})

export class KupRegisterComponent {
  uploader:FileUploader = new FileUploader({url:uri});
  attachmentList:any = [];

  constructor(private _fileService:FileService){
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
        }
      }

  download(index){
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename)
    .subscribe(
        data => saveAs(data, filename),
        error => console.error(error)
    );
   }
  }
