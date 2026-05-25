import { useState } from "react";

export default function useCreateMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const REACT_APP_PORTAL_BE_URL = process.env.NEXT_PUBLIC_PORTAL_BE_URL;

  const createMessage = async (messageData: any) => {
    setLoading(true);
    setSuccess(null);
    setError(null);
    console.log(`PORT`, REACT_APP_PORTAL_BE_URL);

    try {
      const response = await fetch(
        `${REACT_APP_PORTAL_BE_URL}/api/message/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        },
      );
      const data = await response.json();
      console.log("MESSAGE 1", JSON.stringify(data.meta.message));
      if (!response.ok) {
        console.log(response);
        setLoading(false);
        setError(data.meta.message);
      } else {
        setSuccess(data.meta.message);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to create message");
    } finally {
      setLoading(false);
    }
  };

  return {
    createMessage,
    setError,
    setSuccess,
    success,
    loading,
    error,
  };
}
