import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
    
  beforeEach(async () => {
    
   await TestBed.configureTestingModule({
      declarations: [
        AppComponent     
      ],
    
    }).compileComponents();
   
  });

        
        test(`array values should be as same as 'doing' 'done' 'todo'`, () => {
           let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
        
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
          expect(component.doing).toBe("doing");
          expect(component.done).toBe("done");
          expect(component.todo).toBe("todo");
        });
      });

 

  




