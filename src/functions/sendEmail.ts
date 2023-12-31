import axios from "axios";

export default async function sendEmail(
  customerName: string,
  spouseName: string,
  birthDate: string,
  spouseBirthDate: string,
  pets: string,
  address: string,
  city: string,
  state: string,
  postal: string,
  foreignPassport: string,
  phone: string,
  identification: string,
  country: string,
  creditCard: string,
  maritalStatus: string,
  language: string,
  ages: string,
  customerOccupation: string,
  spouseOccupation: string,
  income: string,
  email: string,
  tourDate: string,
  roomName: string,
  resortName: string,
  checkIn: string,
  checkOut: string,
  guests: string
) {
  try {
    const response = await axios.post("/api/contact", {
      customerName,
      spouseName,
      birthDate,
      spouseBirthDate,
      pets,
      address,
      city,
      state,
      postal,
      foreignPassport,
      phone,
      identification,
      country,
      creditCard,
      maritalStatus,
      language,
      ages,
      customerOccupation,
      spouseOccupation,
      income,
      email,
      tourDate,
      roomName,
      resortName,
      checkIn,
      checkOut,
      guests,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.log(error);
  }
}
