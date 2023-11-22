import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CalendarModule,
    InputTextModule ,
    TooltipModule ,
    ConfirmPopupModule,
    CardModule,
    ButtonModule,
    FieldsetModule 
  ],
exports:[
  CalendarModule,
  InputTextModule ,
  TooltipModule ,
  ConfirmPopupModule,
  CardModule,
  ButtonModule,
  FieldsetModule 
]
})
export class PrimengModule { }
