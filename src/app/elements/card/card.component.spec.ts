import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { DEFAULT_SOURCES } from '../../services/source-manager/types';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CardComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.source = DEFAULT_SOURCES.get('youtube')!;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
