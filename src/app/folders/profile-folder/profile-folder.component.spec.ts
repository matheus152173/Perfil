import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFolderComponent } from './profile-folder.component';

describe('ProfileFolderComponent', () => {
  let component: ProfileFolderComponent;
  let fixture: ComponentFixture<ProfileFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
