// Create a reasonably complicated Object in JavaScript that contains attributes and methods for the Motelcustomer.  The  customer  attributes  should  include  (and  not be limited  to),  the customer’sname, birth date,  gender,  androompreferences  (as  an  array),  payment method, mailing  address  (as  a  sub-object), phone  number, check-in,and  check-out  date  (as  a  sub-object),  and object methods  to  determine theirage  and  duration  of  stay.  The  JavaScript  code  should  also  create  a  template  literal  string,  or  properly formatted html, that describes the customer. In other words, writes a paragraph describing the customer with many of their personal attributes dynamically embedded in the string / html coming from the above object definition.

const MotelCustomer = {
  //could set up as a let to change the values for new customers
  //List for MotelCustomer
  name: "Amanda Guzzwell",
  birthDate: new Date(1988, 6, 4), //Makes a date as 1988-6-4
  gender: "Female",
  roomPreference: [
    "Non-smoking",
    "Pets Allowed",
    "Room Size",
    "Number of Beds",
    "Price",
    "Close Amenities",
    "Safety and Security",
    "Room Condition",
    "Check-in/Check-out Times",
    "Reviews and Ratings",
    "Additional Services",
  ], //List for room preference
  paymentMethod: "Credit Card (VISA)",
  mailingAddress: {
    street: "123 Home St",
    city: "St John's",
    province: "NL",
    country: "Canada",
    postalCode: "A1A4Y1",
  },
  phoneNumber: "1-709-555-7777",
  checkInDate: new Date(2024, 7, 16), // Makes a new date (YEAR, MONTH, DAY)
  checkOutDate: new Date(2024, 7, 30), // Makes a new date (YEAR, MONTH, DAY)

  getAge: function () {
    const today = new Date(); // Creates a new Date object representing the current date, stored in the today variable.
    let age = today.getFullYear() - this.birthDate.getFullYear(); // Calculation to get age. uses today object and then minuses it by birthDate object
    return age; // returns age
  },
  //To get the duration of stay I chose to use millisecondsperday, which brings back exact timing on the checkInDate and checkOutDate. "this." references the following object.
  //.getTime gets the the elapsed time from January 1, 1988, 00:00:00 UTC. So it gets the time from said date until whats in the checkInDate value. Then you minus eachother in the duration section to give you the time elapsed between those two dates. Math.ceil is a function that returns the smallest integer greater than or equal to a given number. It rounds a number UP to the nearest whole number. It rounds the duration in milisecondsperday / milisecondsperday UP to a whole number.
  getDurationOfStay: function () {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const checkInTime = this.checkInDate.getTime();
    const checkOutTime = this.checkOutDate.getTime();
    const durationInMilliseconds = checkOutTime - checkInTime;
    return Math.ceil(durationInMilliseconds / millisecondsPerDay);
  },
};
// The following list gets printed to the console. .join joins the roomPreference list together. Everything else is straight forward - calling functions. toDateString makes the date readable.  It returns a string in the format ddd MMM dd yyyy ddd = day of week | mmm = abbreviated month | dd day from 1-31 | yyyy - the year.
const customerDescription = `Name: ${MotelCustomer.name} 
Age: ${MotelCustomer.getAge()}
Gender: ${MotelCustomer.gender}
Room Preferences: ${MotelCustomer.roomPreference.join(", ")}
Payment Method: ${MotelCustomer.paymentMethod}
Mailing Address: ${MotelCustomer.mailingAddress.street}, ${
  MotelCustomer.mailingAddress.city
}, ${MotelCustomer.mailingAddress.province}, ${
  MotelCustomer.mailingAddress.country
}, ${MotelCustomer.mailingAddress.postalCode}
Phone Number: ${MotelCustomer.phoneNumber}
Check-In Date: ${MotelCustomer.checkInDate.toDateString()}
Check-Out Date: ${MotelCustomer.checkOutDate.toDateString()}
Duration of Stay: ${MotelCustomer.getDurationOfStay()} days`;

console.log(customerDescription); //sends to the console
let roomPreferenceSentence = `This modern hotel offers ${MotelCustomer.roomPreference[0]} with ${MotelCustomer.roomPreference[1]}, spacious ${MotelCustomer.roomPreference[2]}s, with a ${MotelCustomer.roomPreference[3]} option, competitive ${MotelCustomer.roomPreference[4]}s, ${MotelCustomer.roomPreference[5]}, top-notch ${MotelCustomer.roomPreference[6]}, unbeatable ${MotelCustomer.roomPreference[7]}s, flexible ${MotelCustomer.roomPreference[8]}, glowing ${MotelCustomer.roomPreference[9]}, and a range of ${MotelCustomer.roomPreference[10]} to enhance your stay. You won't find anywhere that surpasses your expectations like we will!`;

console.log(roomPreferenceSentence); //sends to console
