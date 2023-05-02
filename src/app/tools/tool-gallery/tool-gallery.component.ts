import { Component } from '@angular/core';
import { from, Observable, tap } from 'rxjs';
import { PatchValue } from 'src/app/shared/interfacing/patch.interface';
import { PatchResponse } from 'src/app/shared/interfacing/patch-response.interface';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { TestDataInterface } from '../test-data.interface';
import { testdata } from '../testdata';
import { applyPatch } from 'fast-json-patch';
import { HttpClient } from '@angular/common/http';
import { ObjectBase } from 'src/app/shared/objectBase.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tool-gallery',
  templateUrl: './tool-gallery.component.html',
  styleUrls: ['./tool-gallery.component.scss'],
})
export class ToolGalleryComponent extends AmpersandInterface<TestDataInterface> {
  data: TestDataInterface = JSON.parse(JSON.stringify(testdata[0]));

  constructor(http: HttpClient) {
    super(http);
  }

  override patch<TestDataInterface>(path: string, patches: PatchValue[]): Observable<PatchResponse<TestDataInterface>> {
    // Prepend path of patches with '/', because our backend has a different (probably wrong) implementation
    // of the JSON-Patch (RFC6902) standard. The applyPatch function below requires the '/'.
    patches.forEach((x) => (x.path = `/${x.path}`));
    let content = applyPatch(this.data, patches).newDocument;
    content._label_ = content.Name; // Mock rule in backend

    return from([
      // @ts-ignore
      {
        content: content,
        patches: patches,
        isCommitted: true,
        notifications: {},
        invariantRulesHold: true,
        sessionRefreshAdvice: false,
        navTo: null,
      } as PatchResponse<TestDataInterface>,
    ]).pipe(
      tap((x) => {
        console.log(x);
        if (x.isCommitted) {
          // @ts-expect-error
          this.data = x.content;
        }
      }),
    );
  }
}
