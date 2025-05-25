"use client";

import axios from "axios";
import { CloudLightning } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [fullName, setFullName] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [password, setPassword] = useState<string>("");

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jewellery-y5qn.onrender.com/api/users/register",
        {
          fullName: fullName,
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          role: "user",
        }
      );

      console.log(response);
      toast.success("User registered successfully");


      setFullName("")
      setPassword("")
      setUserName("")
      setPhoneNumber(0)
      setEmail("")

      toast.success("User registered successfully");
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("something went wrong", error.response.data.msg);
    }
  };

  return (
    <div>
      <form
        onSubmit={registerUser}
        className="w-4/12 mx-auto space-y-4 border border-gray-300 p-8  my-12 shadow-md"
      >
        <input
        value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Enter Your FUll Name"
          className="border border-gray-200 outline-0 rounded-md p-2  w-full"
        />
        <input
        value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter Your User Name"
          className="border border-gray-200 outline-0 rounded-md p-2  w-full"
        />
        <input
        value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your email"
          className="border border-gray-200 outline-0 rounded-md p-2  w-full"
        />
        <input
        value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.valueAsNumber)}
          type="number"
          placeholder="Enter Your Phone Number"
          className="border border-gray-200 outline-0 rounded-md p-2  w-full"
        />
        <input
        value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter Your Password"
          className="border border-gray-200 outline-0 rounded-md p-2  w-full"
        />

        <p className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
}
