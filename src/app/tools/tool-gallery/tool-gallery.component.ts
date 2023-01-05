import { Component } from '@angular/core';
import { from, Observable, tap } from 'rxjs';
import { Patch } from 'src/app/shared/interfacing/patch';
import { PatchResponse } from 'src/app/shared/interfacing/patch-response.interface';
import { Resource } from 'src/app/shared/interfacing/resource.interface';
import { TestDataInterface } from '../test-data.interface';
import { testdata } from '../testdata';
import { applyPatch } from 'fast-json-patch';

@Component({
  selector: 'app-tool-gallery',
  templateUrl: './tool-gallery.component.html',
  styleUrls: ['./tool-gallery.component.scss'],
})
export class ToolGalleryComponent implements Resource<TestDataInterface> {
  data: TestDataInterface = JSON.parse(JSON.stringify(testdata[0]));

  constructor() {}

  patch(patches: Patch[]): Observable<PatchResponse<TestDataInterface>> {
    // Prepend path of patches with '/', because our backend has a different (probably wrong) implementation
    // of the JSON-Patch (RFC6902) standard. The applyPatch function below requires the '/'.
    patches.forEach((x) => (x.path = `/${x.path}`));
    let content = applyPatch(this.data, patches).newDocument;
    content._label_ = content.Name; // Mock rule in backend

    return from([
      {
        content: content,
        patches: patches,
        isCommitted: true,
      } as PatchResponse<TestDataInterface>,
    ]).pipe(
      tap((x) => {
        console.log(x);
        if (x.isCommitted) {
          this.data = x.content;
        }
      }),
    );
  }
}
