// External modules

import { MAT_KEYBOARD_DEADKEYS, keyboardDeadkeys } from './configs/keyboard-deadkey.config';
import { MAT_KEYBOARD_LAYOUTS, keyboardLayouts } from './configs/keyboard-layouts.config';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatKeyboardComponent } from './components/keyboard/keyboard.component';
import { MatKeyboardContainerComponent } from './components/keyboard-container/keyboard-container.component';
import { MatKeyboardDirective } from './directives/keyboard.directive';
import { MatKeyboardKebabCasePipe } from './pipes/kebab-case.pipe';
import { MatKeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { MatKeyboardService } from './services/keyboard.service';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

// Angular CDK


// Angular material




// Configs


// Components and directives




// Providers



@NgModule({
    imports: [
        // Angular modules
        CommonModule,
        OverlayModule,
        // Cdk modules
        PortalModule,
        // Material modules
        MatButtonModule,
        MatCommonModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatKeyboardComponent,
        MatKeyboardContainerComponent,
        MatKeyboardKeyComponent,
        MatKeyboardDirective
    ],
    declarations: [
        MatKeyboardKebabCasePipe,
        MatKeyboardComponent,
        MatKeyboardContainerComponent,
        MatKeyboardKeyComponent,
        MatKeyboardDirective
    ],
    providers: [
        MatKeyboardService,
        { provide: MAT_KEYBOARD_DEADKEYS, useValue: keyboardDeadkeys },
        { provide: MAT_KEYBOARD_LAYOUTS, useValue: keyboardLayouts }
    ]
})
export class MatKeyboardModule {}
