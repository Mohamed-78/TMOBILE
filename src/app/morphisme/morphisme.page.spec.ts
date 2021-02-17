import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MorphismePage } from './morphisme.page';

describe('MorphismePage', () => {
  let component: MorphismePage;
  let fixture: ComponentFixture<MorphismePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphismePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MorphismePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
