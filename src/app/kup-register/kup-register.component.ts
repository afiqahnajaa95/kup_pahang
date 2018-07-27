import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

const uri = 'http://localhost:4000/file/upload';

@Component({
  selector: 'app-kup-register',
  templateUrl: './kup-register.component.html',
  styleUrls: ['./kup-register.component.css'],
  providers:[FileService]
})

export class KupRegisterComponent {
  uploader:FileUploader = new FileUploader({url:uri});
  data: FormGroup;
  attachmentList:any = [];
  id: string;

  constructor(
    private _fileService:FileService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    public db: AngularFirestore
  ){
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
    };
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(){
    this.data = this._formBuilder.group({
      regas: ['', Validators.required],
      co_name: ['', Validators.required],
      co_reg: ['', Validators.required],
      co_add: ['', Validators.required],
      req_name: ['', Validators.required],
      ic_no: ['', Validators.required],
      req_pos: ['', Validators.required],
      email: ['', Validators.required],
      co_no: ['', Validators.required],
      fax_no: ['', Validators.required],
    });
  }
  saveRegister(){
    console.log("Saving Data");
    this.db.collection('users').doc(this.id).set(this.data.value);
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
