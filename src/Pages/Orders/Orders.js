import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log(user.email);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/orders?email=${email}`;
    // using async await function and axios
    const getOrders = async () => {
      try {
        const { data } = await axiosPrivate.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="w-50 mx-auto">
      <h1>This is your order :{orders.length} </h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>
            {order.email} ::: {order.service}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
