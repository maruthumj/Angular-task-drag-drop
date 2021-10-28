import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponentComponent } from './pop-up-component/pop-up-component.component';
import { PopupServiceService } from './popup-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class AppComponent{

done:string[]=['Feed Cat','Ride Bike'];
  doing:string[]=['study',];
  todo:string[]=["Get to work",
    "Pick up groceries",
    "Go home",
    "Fall asleep",
     "Get up",
    "Brush teeth",
    "Take a shower",
    "Check e-mail",
    "Walk dog"];
    
constructor(public popUpservice: PopupServiceService,public dialogRef:MatDialog){
  
}
  
 openDialog(val:string){
   this.popUpservice.changeType(val);
   console.log(val);
    const dialog = this.dialogRef.open(PopUpComponentComponent,  
      );
    dialog.afterClosed().subscribe(result => {
    
       const isWhitespace = (result|| '').trim().length === 0;
       const isValid = !isWhitespace;
      
         if(result && isValid) {

          if(val==="todo"){
                this.todo.push(result);
        this.todo.slice(0);
        console.log(this.todo);
      }
     else if(val==="doing"){
        this.doing.push(result);
        console.log(this.doing);
      }
      else{
        this.done.push(result);
        console.log(this.done);
      }
      
       }
      }
      
       
      
      
    );
  }
  RemoveArray(arrName:string,index: number){
    console.log(arrName,index);

    if(arrName==='todo')
    
      {
        let beginning=this.todo.slice(0,index);
        beginning.push(...this.todo.slice(index+1,this.todo.length));
        this.todo=beginning;
      }
      else if(arrName==='done')
      {
        let beginning=this.done.slice(0,index);
        beginning.push(...this.done.slice(index+1,this.done.length));
        this.done=beginning;
      }
      else
      { 
        let beginning=this.doing.slice(0,index);
        beginning.push(...this.doing.slice(index+1,this.doing.length));
        this.doing=beginning;
      }
       }

  title = 'CAT-drag-drop';
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(this.todo);
                          console.log(this.doing);
                        console.log(this.done);       
    }
  }
}


