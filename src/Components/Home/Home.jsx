import React from "react";
import styles from "./Home.module.css";
import HomePagePhoto from "../../assets/HomePagePhoto1.jpg";
import hospitalBedPhoto from "../../assets/hospital-bed.png";
import Card from "./Card/Card";

export default function Home() {
  return (
    <div className="bigcontainer">
      <div className="container1 d-flex flex-xl-row-reverse flex-column-reverse">
        <div className={`${styles.HomePagePhoto} col-xl-7 `}>
          <img
            src={HomePagePhoto}
            alt=""
            width="100%"
            height="100%"
            className={`${styles.photo} position-absolute`}
          />
        </div>
        <div
          className={`d-flex pt-4 align-items-center flex-column ${styles.content}`}
        >
          <h1 className={`me-5 `}>
            {" "}
            Your Journey to Better <span>Health</span> Starts Here{" "}
            <img src={hospitalBedPhoto} alt="" width="100" height="100" />
          </h1>
          <p>
            We set high standards of quality, research and transparency for what
            we share, ensuringyou have access to nothing but the best.{" "}
          </p>
        </div>
      </div>

      <div className={styles.container2}>
        <h2 className={`text-center mt-4`}> Our Services </h2>
        <div
          className={`${styles.cards} row my-5 mx-auto text-center d-flex justify-content-center py-4`}
        >
          <Card
            icon="bi bi-clipboard2-check"
            title="Daily CheckUp"
            content="Conducting a regular Daily Health Check is one way to identify who are in distress, sick, or injured and need exclusion from care "
          />

          <Card
            icon="bi bi-capsule "
            title="Safe Treatment"
            content="Medicines are safe when used as prescribed or as directed on the label.There are risks in taking any medicine, vitamin or other supplement"
          />

          <Card
            icon="bi bi-hospital"
            title="Outpatient Clinics"
            content="Clinics are equipped with the latest medical equipment, which enables patients to get the necessary health care quickly and effectively."
          />

          <Card
            icon="bi bi-people-fill"
            title="Specialist Doctors"
            content=" A specialist can diagnose and treat disease and help you manage chronic illnesses. Specialists are an important part of your medical team."
          />

          <Card
            icon="bi bi-coin"
            title="Low Cost Services"
            content=" Help to reduce the financial burden of healthcare costs on underserved communities while also providing high-quality care"
          />

          <Card
            icon="bi bi-check2-circle"
            title="Medical Consultation"
            content="Get expert answers to any medical question on your mind! Whether you need trusted information or precise advice, top doctors will respond."
          />
        </div>
      </div>
    </div>
  );
}
