/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DetailsHolderComponent } from './details-holder.component';

describe('Component: DetailsHolder', () => {
  it('should create an instance', () => {
    let component = new DetailsHolderComponent();
    expect(component).toBeTruthy();
  });
});
