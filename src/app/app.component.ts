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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class AppComponent{
BeginningArray:string[]=[];
EndArray:string[]=[];
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
  // popUpservice.doneListval.subscribe(val=>this.done=val);
  // popUpservice.doingListval.subscribe(val=>this.doing=val);
  // popUpservice.todoListval.subscribe(val=>this.todo=val);
  
}
  


 openDialog(val:string){
   this.popUpservice.changeType(val);
   console.log(val);
    const dialog = this.dialogRef.open(PopUpComponentComponent);
    dialog.afterClosed().subscribe((result:string) => {
      console.log(result);
        
      if(val==="todo"){
        
        this.todo.push(result);
        this.todo.slice(0);
        console.log(this.todo);
      }
      else if(val==='doing'){
        this.doing.push(result);
        console.log(this.doing);
      }
      else{
        this.done.push(result);
        console.log(this.done);
      }
    });
  }
  RemoveArray(arrName:string,index: number){
    console.log(arrName,index);
    if(arrName==='todo')
    
      {
        let begining=this.todo.slice(0,index);
        begining.push(...this.todo.slice(index+1,this.todo.length));
        this.todo=begining;
      }
      else if(arrName==='done')
      {
        let begining=this.done.slice(0,index);
        begining.push(...this.done.slice(index+1,this.done.length));
        this.done=begining;
      }
      else
      { 
        let begining=this.doing.slice(0,index);
        begining.push(...this.doing.slice(index+1,this.done.length));
        this.doing=begining;
      }
      //  this.BeginningArray.push(arrName.slice(index,index+1));
      //  this.EndArray.push(arrName.slice(index+1,arrName.length));
      //  return 
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


