import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiktokPage } from './tiktok.page';

describe('TiktokPage', () => {
  let component: TiktokPage;
  let fixture: ComponentFixture<TiktokPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiktokPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiktokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
