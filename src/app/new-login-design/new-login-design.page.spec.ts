import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLoginDesignPage } from './new-login-design.page';

describe('NewLoginDesignPage', () => {
  let component: NewLoginDesignPage;
  let fixture: ComponentFixture<NewLoginDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoginDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLoginDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
