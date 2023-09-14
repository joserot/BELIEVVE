import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href="/terms-and-conditions" className={styles.terms}>
          Terms and Conditions
        </Link>
        <p>
          This is an Offer to sell travel - Registered Florida Seller of Travel
          - Ref No ST-38016
        </p>
        <p>(C) Copyright 2023 Discovery Resort Marketing All Rights Reserved</p>
        <h4>
          This advertising material is being used for the purpose of soliciting
          sales of timeshare interests or plans
        </h4>
      </div>
    </footer>
  );
}
