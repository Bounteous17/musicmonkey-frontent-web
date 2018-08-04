import { Component, OnInit } from '@angular/core';
import { SharedComponent } from '../shared/shared.component';
import { ManageRawService } from '../services/raw';
import { MainService } from '../services/main';

@Component({
  selector: 'app-torrent-upload',
  templateUrl: './torrent-upload.component.html',
  styleUrls: ['./torrent-upload.component.css'],
})
export class TorrentUploadComponent {
  formTitle: string;
  formStyle: string;
  relatedArtists: Array<any>;
  musicStyles: Array<any> = [
    {
      name: 'Indie Pop',
      code: 'indie-pop',
    },
    {
      name: 'Reggae',
      code: 'reggae',
    },
    {
      name: 'Rock',
      code: 'rock',
    },
    {
      name: 'Hip-Hop',
      code: 'hip-hop',
    },
    {
      name: 'Classical',
      code: 'classical',
    },
    {
      name: 'Dance',
      code: 'dance',
    },
    {
      name: 'Electronic',
      code: 'electronic',
    },
    {
      name: 'Jazz',
      code: 'jazz',
    },
    {
      name: 'Opera',
      code: 'opera',
    },
    {
      name: 'Drum & Bass',
      code: 'drum-bass',
    },
    {
      name: 'Chill',
      code: 'chill',
    },
    {
      name: 'Rap',
      code: 'rap',
    },
  ];
  formArtistId: any;
  formArtistName: any;
  fileList: any;
  file: File;
  fileSize: number;

  constructor(
    private _manageRawService: ManageRawService,
    private _mainService: MainService,
    private _sharedComponent: SharedComponent
  ) {}

  submitForm() {
    if (!this.formArtistId) {
      this.formArtistId = false;
    }

    if (this.fileList.length > 0) {
      if (this.fileSize < 314572) {
        let formData: FormData = new FormData();
        formData.append('formTorrent', this.file);
        formData.append('formTitle', this.formTitle);
        formData.append('formArtistName', this.formArtistName);
        formData.append('formArtistId', this.formArtistId);
        formData.append('formStyle', this.formStyle);

        this._manageRawService.upload(formData).subscribe(
          data => {
            this._sharedComponent.showSuccess(data.message);
          },
          error => {
            this._sharedComponent.showError(error.message);
          }
        );
      } else {
        this._sharedComponent.showError('File too large');
      }
    }
  }

  fileSelected(event) {
    this.fileList = event.target.files;
    this.file = this.fileList[0];
    this.fileSize = this.fileList[0].size;
  }

  keyupFindArtist() {
    this._mainService.artistRelated({ artist: this.formArtistName }).subscribe(
      data => {
        this.relatedArtists = data.message;
      },
      error => {
        console.log(error.message);
      }
    );
  }

  defineArtist(artistId, artistName) {
    this.formArtistId = artistId;
    this.formArtistName = artistName;
  }
}
