import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailFleurPage } from './detail-fleur.page';

describe('DetailFleurPage', () => {
  let component: DetailFleurPage;
  let fixture: ComponentFixture<DetailFleurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFleurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFleurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
