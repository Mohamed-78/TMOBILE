import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestoPage } from './resto.page';

describe('RestoPage', () => {
  let component: RestoPage;
  let fixture: ComponentFixture<RestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
