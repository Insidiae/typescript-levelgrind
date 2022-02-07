// import { User } from "./User";
// import { Company } from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class CustomMap {
  private _googleMap: google.maps.Map;

  constructor(elementId) {
    this._googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  //! The following code is not optimal. We'll refactor this later!
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this._googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this._googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  //? This one is better, but not by that much.
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this._googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  //* There we go. Much better!
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this._googleMap, marker);
    });
  }
}
