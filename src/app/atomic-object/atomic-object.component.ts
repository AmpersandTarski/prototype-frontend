import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.css']
})
export class AtomicOBJECTComponent implements OnInit {

  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
