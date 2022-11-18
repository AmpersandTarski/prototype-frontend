import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonInterface } from './person.interface';
import { testdata } from './testdata';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  public personId?: string | null;
  public person?: PersonInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.personId = params.get('id');
    });

    // if null, pick first person from testdata
    if (this.personId === null) {
      this.person = testdata[0];
    } else {
      this.person = testdata.find((object) => object._id_ === this.personId);
    }
  }
}
