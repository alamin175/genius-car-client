import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    // const service = service.name;
    const orders = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    axios.post("http://localhost:5000/order", orders).then((response) => {
      //   console.log(response);
      event.target.reset();
      if (response.data.insertedId) {
        toast("Your order placed successfully");
      }
    });

    // console.log(users);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please order your booking :: {service.name} </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Enter Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Enter email"
          value={user?.email}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          placeholder="Enter service"
          value={service.name}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Enter address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Enter Phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Checkout;
