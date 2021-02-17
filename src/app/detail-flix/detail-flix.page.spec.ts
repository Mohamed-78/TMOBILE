import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailFlixPage } from './detail-flix.page';

describe('DetailFlixPage', () => {
  let component: DetailFlixPage;
  let fixture: ComponentFixture<DetailFlixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFlixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFlixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
