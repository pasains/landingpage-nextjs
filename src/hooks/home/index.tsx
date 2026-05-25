import { useEffect, useState } from "react";
import { PostProps } from "../../data";

export default function useHome() {
  const [title, setTitle] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(12);

  const REACT_APP_PORTAL_BE_URL = process.env.NEXT_PUBLIC_PORTAL_BE_URL;

  useEffect(() => {
    function fetchTitle() {
      fetch(`${REACT_APP_PORTAL_BE_URL}/api/post/?size=4&page=1`)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Not found!");
          }
          return response.json();
        })
        .then((json) => setTitle(json))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchTitle();
    return () => {};
  }, []);

  const totalPages = size / 4;

  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetch(`${REACT_APP_PORTAL_BE_URL}/api/post/?size=4&page=${nextPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  };

  const prevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    fetch(`${REACT_APP_PORTAL_BE_URL}/api/post/?size=4&page=${prevPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  };

  return {
    title,
    nextPage,
    prevPage,
    page,
    totalPages,
  };
}
