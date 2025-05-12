import React from "react";
import styles from "./PatientProfile.module.css";

export default function PatientProfile() {
  return (
    <div className={styles.bigContainer}>
      <div
        className={`${styles.Container1} d-flex flex-lg-row gap-4 py-3 px-4 col-9 mx-auto my-5 rounded-5`}
      >
        <div className="ProfilePhoto col-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="white"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>

        <div className={`${styles.PatientData} d-flex flex-column gap-2 col-7`}>
          <div className={`${styles.d1} d-flex align-items-center`}>
            <h2> Patient Name </h2>
            <span> Pat_id : id </span>
          </div>
          <div className={`${styles.d2} d-flex`}>
            <div className="d21 d-flex">
              <i class="bi bi-person"></i>
              <p>34 years, Female </p>
            </div>
            <div className="d22 d-flex">
              <i class="bi bi-telephone"></i>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="d23 d-flex">
              <i class="bi bi-envelope"></i>
              <p>sarah.johnson@example.com</p>
            </div>
          </div>
          <div className={`${styles.d3} d-flex`}>
            <i class="bi bi-geo-alt"></i>
            <p>23 Health Street, Medical City, MC 12345</p>
          </div>
        </div>

        <button className={`btn`}>
          <i class="bi bi-pencil-square"></i> <br /> Edit Profile
        </button>
        <button className={`btn`}>
          <i class="bi bi-box-arrow-left"></i> <br /> Log Out
        </button>
      </div>

      <div
        className={`Container2 col-9 mx-auto my-5 d-flex justify-content-around`}
      >
        <div className="medicalData col-5 ">
          <div className={` ${styles.groupHead} p-3 text-light px-4`}>
            <h2>
              {" "}
              <i class="bi bi-file-medical-fill"></i> Medical Data{" "}
            </h2>
          </div>
          <div className={`${styles.groupBody} bg-light `}>
            <div className="BloodType">
              <p>Blood Type</p>
              <p>A+</p>
            </div>
            <div className="Doctor">
              <p>Doctor</p>
              <p>Doctor Name</p>
            </div>
            <div className="Dependencies">
              <p>Patient Dependency</p>
              <p>Patient Dependencies</p>
            </div>
          </div>
        </div>

        <div className="appointments col-6 ">
          <div className={` ${styles.groupHead1} p-3 text-light px-4`}>
            <h2>
              {" "}
              <i class="bi bi-clock-history"></i> Upcoming Appointments{" "}
            </h2>
          </div>
          <div className={`${styles.groupBody} bg-light `}></div>
        </div>
      </div>
    </div>
  );
}
