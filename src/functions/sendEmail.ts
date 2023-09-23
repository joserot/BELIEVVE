import axios from "axios";

export default async function sendEmail(
  customerName: string,
  spouseName: string,
  birthDate: string,
  spouseBirthDate: string,
  pets: string,
  address: string,
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
  resortName: string
) {
  try {
    const response = await axios.post("/api/contact", {
      customerName,
      spouseName,
      birthDate,
      spouseBirthDate,
      pets,
      address,
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
