import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atomic-bigalphanumeric',
  templateUrl: './atomic-bigalphanumeric.component.html',
  styleUrls: ['./atomic-bigalphanumeric.component.css']
})
export class AtomicBIGALPHANUMERICComponent implements OnInit {
  @Input() property!: string | Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
