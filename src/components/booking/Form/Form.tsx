"use client";

import countries from "../../../../assets/countries";
import languages from "../../../../assets/languages";
import styles from "./Form.module.css";
import sendEmail from "<src>/functions/sendEmail";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "<src>/components/common/Modal/Modal";
import ModalInfo from "../ModalInfo/ModalInfo";
import useModal from "<src>/hooks/useModal";

interface Props {
  room: any;
  checkIn: any;
  checkOut: any;
  guests: any;
}

export default function Form({ room, checkIn, checkOut, guests }: Props) {
  const { container, h2, form, doubleInput, tripleInput, sent, btnInfo } =
    styles;

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [isOpen, openModal, closeModal] = useModal(false);

  const handlerSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    setIsLoading(true);

    e.preventDefault();

    const target: any = e.target;

    const customerName = target.customerName.value;
    const spouseName = target.spouseName.value;
    const birthDate = target.birthDate.value;
    const spouseBirthDate = target.spouseBirthDate.value;
    const pets = target.pets.value;
    const address = target.address.value;
    const city = target.city.value;
    const state = target.state.value;
    const postal = target.postal.value;
    const country = target.country.value;
    const phone = target.phone.value;
    const identification = target.identification.value;
    const foreignPassport = target.foreignPassport.value;
    const creditCard = target.creditCard.value;
    const maritalStatus = target.maritalStatus.value;
    const language = target.language.value;
    const ages = target.ages.value;
    const customerOccupation = target.customerOccupation.value;
    const spouseOccupation = target.spouseOccupation.value;
    const income = target.income.value;
    const email = target.email.value;
    const tourDate = target.value;
    const roomName = room.name;
    const resortName = room.resort.fields.secretName;

    const response = await sendEmail(
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
      guests
    );

    if (response.message === "success") {
      router.push("/success");
    }

    setIsLoading(false);
  };

  return (
    <article className={container}>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalInfo />
      </Modal>
      <h2 className={h2}>Reservation and Check-in Details</h2>
      <form onSubmit={handlerSubmit} className={form}>
        <label>
          Customer Name:
          <input type="text" name="customerName" required />
        </label>
        <label>
          Spouse Name:
          <input type="text" name="spouseName" required />
        </label>
        <div className={tripleInput}>
          <label>
            Date of Birth:
            <input type="date" name="birthDate" required />
          </label>
          <label>
            Spouse Date of Birth:
            <input type="date" name="spouseBirthDate" required />
          </label>
          <label>
            Pets:
            <select name="pets" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        {/* <label>
          Address: (Matching address of the couple&apos;s ID): Address, City,
          State, Zip Code:
          <input type="text" name="address" required />
        </label> */}
        <div className={tripleInput}>
          <label>
            Adress:
            <input type="tel" name="address" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            State:
            <input type="text" name="state" required />
          </label>
        </div>
        <div className={doubleInput}>
          <label>
            Postal:
            <input type="tel" name="postal" required />
          </label>
          <label>
            Country:
            <select name="country" defaultValue="United States" required>
              {countries.map((country) => {
                return (
                  <option value={country} key={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className={tripleInput}>
          <label>
            Phone:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Identification for check-in:
            <input type="text" name="identification" required />
          </label>
          <label>
            Foreign Passport
            <select
              name="foreignPassport"
              defaultValue="United States"
              required
            >
              {countries.map((country) => {
                return (
                  <option value={country} key={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className={doubleInput}>
          <label>
            Major Credit Card TYPE: (Make sure it is a major credit card)
            <select name="creditCard" required>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
            </select>
          </label>
          <label>
            Marital Status:
            <select name="maritalStatus" required>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
              <option value="separated ">Separated </option>
            </select>
          </label>
        </div>
        <div className={doubleInput}>
          <label>
            First language / What language do you both speak fluently?:
            <select name="language" defaultValue="English" required>
              {languages.map((language) => {
                return (
                  <option value={language} key={language}>
                    {language}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Ages:
            <input type="text" name="ages" required />
          </label>
        </div>
        <div className={tripleInput}>
          <label title="This field is optional">
            <span>
              Customer Occupation:{" "}
              <button
                className={btnInfo}
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                (?)
              </button>
            </span>
            <input type="text" name="customerOccupation" />
          </label>
          <label title="This field is optional">
            <span>
              Spouse Occupation:{" "}
              <button
                className={btnInfo}
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                (?)
              </button>
            </span>
            <input type="text" name="spouseOccupation" />
          </label>
          <label title="This field is optional">
            <span>
              Combined Yearly Income:{" "}
              <button
                className={btnInfo}
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                (?)
              </button>
            </span>
            <input type="text" name="income" />
          </label>
        </div>
        <div className={doubleInput}>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Preferred tour date:
            <input type="date" name="tourDate" required />
          </label>
        </div>
        <button className={sent}>{isLoading ? "sending..." : "send"}</button>
      </form>
    </article>
  );
}
