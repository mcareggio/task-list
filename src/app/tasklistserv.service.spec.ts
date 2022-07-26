import { TestBed } from '@angular/core/testing';

import { TasklistservService } from './tasklistserv.service';

describe('TasklistservService', () => {
  let service: TasklistservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasklistservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
