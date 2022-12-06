import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-box-table',
  templateUrl: './box-table.component.html',
  styleUrls: ['./box-table.component.css'],
})
export class BoxTableComponent<T> implements OnInit {
  @Input() data: T[] = [];
  @ContentChild('headers') headers!: TemplateRef<T>;
  @ContentChild('rows') rows!: TemplateRef<T>;

  ngOnInit(): void { }
}
