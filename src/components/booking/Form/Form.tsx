import countries from "../../../../assets/countries";
import languages from "../../../../assets/languages";

export default function Form() {
  return (
    <article>
      <h2>Reservation and Check-in Details</h2>
      <form>
        <label>
          Booking Date:
          <input type="date" name="bookingDate" />
        </label>
        <label>
          Customer Name:
          <input type="text" name="customerName" />
        </label>
        <label>
          Spouse Name:
          <input type="text" name="spouseName" />
        </label>
        <div>
          <label>
            Date of Birth:
            <input type="date" name="birthDate" />
          </label>
          <label>
            Spouse Date of Birth:
            <input type="date" name="spouseBirthDate" />
          </label>
          <label>
            Pets:
            <select name="pets">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <label>
          Address: (Matching address of the couple&apos;s ID): Address, City,
          State, Zip Code:
          <input type="text" name="address" />
        </label>
        <div>
          <label>
            Phone:
            <input type="tel" name="phone" />
          </label>
          <label>
            Identification for check-in:
            <input type="text" name="phone" />
          </label>
          <label>
            Foreign Passport
            <select name="country">
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
        <div>
          <label>
            Major Credit Card TYPE: (Make sure it is a major credit card)
            <select name="creditCard">
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
            </select>
          </label>
          <label>
            Marital Status:
            <select name="maritalStatus">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
              <option value="separated ">Separated </option>
            </select>
          </label>
        </div>
        <div>
          <label>
            First language / What language do you both speak fluently?:
            <select name="language">
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
            <input type="text" name="ages" />
          </label>
        </div>
        <div>
          <label>
            Customer Occupation:
            <input type="text" name="customerOccupation" />
          </label>
          <label>
            Spouse Occupation:
            <input type="text" name="spouseOccupation" />
          </label>
          <label>
            Combined Yearly Income:
            <input type="text" name="income" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Preferred tour date:
            <input type="date" name="tourDate" />
          </label>
        </div>
        <button>sent</button>
      </form>
    </article>
  );
}
