/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondBitComponent } from './second-bit.component';

describe('SecondBitComponent', () => {
  let component: SecondBitComponent;
  let fixture: ComponentFixture<SecondBitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondBitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
