import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarmascotaPage } from './editarmascota.page';

describe('EditarmascotaPage', () => {
  let component: EditarmascotaPage;
  let fixture: ComponentFixture<EditarmascotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmascotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
