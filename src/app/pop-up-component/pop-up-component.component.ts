import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupServiceService } from '../popup-service.service';

@Component({
  selector: 'app-pop-up-component',
  templateUrl: './pop-up-component.component.html',
  styleUrls: ['./pop-up-component.component.css']
})
export class PopUpComponentComponent implements OnInit {

isnotvalid:boolean = true;
text:string='';
type='';


constructor(private popUpservice: PopupServiceService, public dialogRef: MatDialogRef<PopUpComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
  
  popUpservice.typeVal.subscribe(val=>this.type=val);

}
  ngOnInit() {
       
  } 
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onclick(){
    if(this.text)
    { 
      this.isnotvalid=false}
    else
      this.isnotvalid=true;
  }
}
