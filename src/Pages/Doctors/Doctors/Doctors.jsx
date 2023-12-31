import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import doctorsData from "../../../data/doctors.json";
import Doctor from "./Doctor";
import Title from "../../../components/Title";
import BookingModal from "../BookingModal/BookingModal";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [bookedDoctor, setBookedDoctor] = useState("");
  const { serviceTitle } = useParams();

  useEffect(() => {
    const filteredDoctors = doctorsData.filter(
      (doctor) => doctor.service === serviceTitle
    );

    setDoctors(filteredDoctors);
  }, []);
  return (
    <section className="mt-16 md:mt-16 mx-4 space-y-8">
      <div className="text-center mt-8">
        <Title fontWeight="font-medium">Available Doctors</Title>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        {doctors.map((doctor) => (
          <Doctor
            key={doctor.id}
            doctor={doctor}
            setBookedDoctor={setBookedDoctor}
          />
        ))}
      </div>
      <BookingModal bookedDoctor={bookedDoctor} />
    </section>
  );
};

// `http://localhost:9999/doctors?service=${serviceTitle}`

export default Doctors;
