/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {BestPostComponent} from "./bestpost.component";

describe('BestPostComponent', () => {
  let component: BestPostComponent;
  let fixture: ComponentFixture<BestPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
