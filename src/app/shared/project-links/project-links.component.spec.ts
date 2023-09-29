import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinksComponent } from './project-links.component';

describe('ProjectLinksComponent', () => {
  let component: ProjectLinksComponent;
  let fixture: ComponentFixture<ProjectLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLinksComponent]
    });
    fixture = TestBed.createComponent(ProjectLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
