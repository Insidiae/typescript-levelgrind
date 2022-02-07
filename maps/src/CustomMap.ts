import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private _googleMap: google.maps.Map;

  constructor(elementId) {
    this._googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  //! The following code is not optimal. We'll refactor this later!
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
