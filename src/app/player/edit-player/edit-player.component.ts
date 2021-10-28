import { Component, Input, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/shared/country.model';
import { country } from 'src/app/data/country-data';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Query } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
})
export class EditPlayerComponent implements OnInit {
  public countries: any = country;

  constructor(
    public service: PaymentDetailService,
    private modalService: NgbModal,
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';

    this.config.bindValue = 'value';
  }
  @Input() player: any;
  playerName: string;
  position: string;
  nativeCountry: string;
  dateOfBirth: string;
  imageName: string;
  imagePath: string;
  id: string;
  optionPosition: string[] = [
    'Striker',
    'Goalkeeper',
    'Right Back',
    'Left Back',
    'Centre Back',
    'Central Defensive',
    'Attacking Midfielders',
    'Midfielder',
  ];
  formData = new FormData();

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.playerName = this.player.playerName;
    this.position = this.player.position;
    this.dateOfBirth = this.player.dateOfBirth;
    this.nativeCountry = this.player.nativeCountry;
    this.imageName = this.player.imageName;
    this.imagePath = this.service.PhotoURL + this.player.ImageName;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    // console.log(filterValue);
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  refeshForm() {
    this.playerName = this.player.playerName;
    this.position = this.player.position;
    this.dateOfBirth = this.player.dateOfBirth;
    this.nativeCountry = this.player.nativeCountry;
    this.imageName = this.player.imageName;
    this.imagePath = this.service.PhotoURL + this.player.imageName;
    // console.log(this.optionPosition);
  }

  addPlayer() {
    this.formData.append('playerName', this.playerName);
    this.formData.append('position', this.position);
    this.formData.append('dateOfBirth', this.dateOfBirth);
    // this.formData.append("imageName", this.imageName);
    this.formData.append('nativeCountry', this.nativeCountry);

    this.service.postPaymentDetail1(this.formData).subscribe(
      (res) => {
        alert('Add Success!!');
      },
      (error) => console.log(error)
    );
    this.refeshForm();
  }

  updatePlayer() {
    this.formData.append('playerName', this.playerName);
    this.formData.append('position', this.position);
    this.formData.append('dateOfBirth', this.dateOfBirth);
    this.formData.append('imageName', this.imageName);
    this.formData.append('nativeCountry', this.nativeCountry);
    if (this.formData.get('imageFile') != null) {
      this.formData.set('imageName', '');
    }
    console.log(this.formData.get('imageFile'));
    console.log(this.formData.get('imageName'));
    this.service.putPaymentDetail(this.player.id, this.formData).subscribe(
      (res) => {
        alert('Update success');
      },
      (error) => console.log(error)
    );
  }

  uploadPhoto(event: any) {
    const file = event.target.files[0];
    this.formData.append('imageFile', file);
  }

  ActivateAddEditPlayer1: boolean = false;

  addClick() {
    this.ActivateAddEditPlayer1 = true;
  }

  closeClick() {
    this.ActivateAddEditPlayer1 = false;
  }

  openVerticallyCentered(content: any) {
    this.ActivateAddEditPlayer1 = true;
    this.modalService.open(content, { centered: true });
  }
  // valueSelected(){

  public data: { [key: string]: Object }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' },
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Name', value: 'Code' };
  // set the height of the popup element
  public height: string = '220px';
  // set the placeholder to DropDownList input element
  public watermark: string = 'Select a country';
  // set the placeholder to filter search box input element
  public filterPlaceholder: string = 'Search';
  // filtering event handler to filter a Country
  public onFiltering: EmitType<FilteringEventArgs> = (
    e: FilteringEventArgs
  ) => {
    let query: Query = new Query();
    //frame the query based on search string with filter type.
    query =
      e.text !== '' ? query.where('Name', 'startswith', e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.data, query);
  };

  // }
}
