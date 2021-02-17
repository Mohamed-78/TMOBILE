import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FleurPage } from './fleur.page';

describe('FleurPage', () => {
  let component: FleurPage;
  let fixture: ComponentFixture<FleurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FleurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
