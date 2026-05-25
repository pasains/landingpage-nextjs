"use client";

import React, { useEffect, useState } from "react";

interface MessageProps {
  onSubmit: (messageData: any) => void;
  isSubmitting?: any;
  success?: any;
}

const MessageForm: React.FC<MessageProps> = ({
  onSubmit,
  isSubmitting,
  success,
}) => {
  const [messageData, setMessageData] = useState({
    name: "",
    organization: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    if (success) {
      setMessageData({
        name: "",
        organization: "",
        email: "",
        comment: "",
      });
    }
  }, [success]);

  const handleInputChange = (e: any) => {
    const { name, value, type } = e.target as HTMLInputElement;
    let finalValue = type === "number" ? +value : value;
    console.log(`FINAL VALUE`, finalValue);

    console.log(`MESSAGE DATA`, messageData);
    setMessageData({
      ...messageData,
      [name]: finalValue,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(messageData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="font-nunito bg-white lg:p-8 p-6 rounded-md">
        <h1 className="text-xl tracking-tighter font-bold text-bold-orange mb-2">
          MESSAGE US
        </h1>
        <label>
          <h1>Name :</h1>
          <input
            type="text"
            name="name"
            value={messageData.name || ""}
            onChange={handleInputChange}
            placeholder="Name"
            className="my-2 p-2 space-y-2 w-[320px] md:w-[420px] border border-orange-400 rounded-md"
            required
          />
        </label>
        <label>
          <h1>Organization :</h1>
          <input
            type="text"
            name="organization"
            value={messageData.organization || ""}
            onChange={handleInputChange}
            placeholder="Organization"
            className="my-2 p-2 space-y-2 w-[320px] md:w-[420px] border border-orange-400 rounded-md"
            required
          />
        </label>
        <label>
          <h1>E-mail :</h1>
          <input
            type="email"
            name="email"
            value={messageData.email || ""}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="my-2 p-2 space-y-2 w-[320px] md:w-[420px] border border-orange-400 rounded-md"
            required
          />
        </label>
        <label>
          <h1>Comment :</h1>
          <textarea
            value={messageData.comment || ""}
            name="comment"
            onChange={handleInputChange}
            placeholder="Comment"
            className="my-2 p-2 space-y-2 w-[320px] md:w-[420px] h-[180px] md:h-[180px] border border-orange-400 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex box bg-light-orange rounded-md w-[100px] h-[40px] place-content-center items-center font-bold text-white hover:bg-light-orange duration-300"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
