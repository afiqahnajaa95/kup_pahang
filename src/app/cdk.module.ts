import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {LayoutModule} from '@angular/cdk/layout';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    A11yModule,
    BidiModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule
  ],
  exports: [
    A11yModule,
    BidiModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule
  ]
})
export class CDKModule { }
