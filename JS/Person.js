class Person {
  constructor(
    lastname, 
    givenName, 
    middleName,
    emailAddress
  ) {
    // Properties
    this.lastName = lastname;
    this.givenName = givenName;
    this.middleName = middleName;
    this.emailAddress = emailAddress;
    this.address = {
      city: null,
      province: null
    }
  }
  setAddress(city, province) {
    this.address.city = city;
    this.address.province = province;
  }
  callIntroduce() {
    introduce();
  }
  introduce() {
    return `Hello my name is ${this.givenName} ${this.lastName} from ${this.address.city}, ${this.address.province}.`
  }
}

export default Person;