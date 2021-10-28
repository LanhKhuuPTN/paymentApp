import { Component, OnInit, Input } from '@angular/core';
import { ManageTeamService } from 'src/app/shared/manage-team.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.css'],
})
export class ShowTeamComponent implements OnInit {
  constructor(public service: ManageTeamService) {}

  @Input() team: any;
  teamName: String;
  country: String;
  dateCreate: String;
  imageName: String;
  imagePath: String;
  id: String;

  ngOnInit(): void {
    this.service.refreshList();
    this.imageName = this.team.imageName;
    this.imagePath = this.service.PhotoURL + this.team.imageName;
  }
  ModalTitle: String;
}
