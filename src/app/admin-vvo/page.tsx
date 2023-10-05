"use client";

import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import styles from "./admin.module.css";
import { useState } from "react";
import axios from "axios";

export default function PageAdmin() {
  const [archive, setArchive] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { container, form } = styles;

  const handleImage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target: any = e.target;
    setArchive(target.files[0]);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!archive) return;

    setIsLoading(true);

    const formData = new FormData();

    formData.append("excel", archive);

    try {
      const res = await axios.post(
        "https://vive.vacations.outlet.vvoutlet.net/api/updateDataResortDisponibility",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        alert("Uploaded file");
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className={container}>
        <form onSubmit={handleSubmit} className={form}>
          <label>
            Excel
            <input onChange={handleImage} type="file" name="excel" />
          </label>
          <button disabled={isLoading}>
            {isLoading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
