import { TestBed } from '@angular/core/testing';

import { ControleSidebarService } from './controle-sidebar.service';

describe('ControleSidebarService', () => {
  let service: ControleSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
