import { useEffect, useState } from "react";

export enum PostType {
  "ARTICLE" = "ARTICLE",
  "REPORT" = "TRIP REPORT",
  "TRAINING" = "TRAINING",
}
export type PostProps = {
  id: number;
  title: string;
  type: PostType;
  headerPhoto: string;
  writer: string;
  date: string;
  place: string;
  generation: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagrap: string;
  fourthParagrap: string;
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  captionFirstImage?: string;
  captionSecondImage?: string;
  captionThirdImage?: string;
  photoCollage: string;
  captionPhotoCollage: string;
  quote: string;
};

export default function usePost() {
  const [post, setPost] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [deleteId, setDeletId] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const REACT_APP_PORTAL_BE_URL = process.env.NEXT_PUBLIC_PORTAL_BE_URL;
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError(null);
    async function fetchTitle(currentPage: number) {
      try {
        const response = await fetch(
          `${REACT_APP_PORTAL_BE_URL}/api/post?page=${currentPage}&limit=10`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          },
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Not found!");
        }
        const json = await response.json();
        if (Array.isArray(json.data.post)) {
          setLoading(false);
          setPost(json.data.post);
          setTotalPage(json.data.totalPage);
        } else {
          setLoading(false);
          console.error("Expected array post, got:", json.data);
          setPost([]);
        }
      } catch (error: any) {
        setError(`Fetch error: ${error}`);
        setPost([]);
      }
    }

    fetchTitle(page);
  }, [page]);

  const deletedPost = async (id: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${REACT_APP_PORTAL_BE_URL}/api/post/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "aplication/json",
            Authorization: `${token}`,
          },
        },
      );

      const result = await response.json();
      if (!response.ok) {
        console.log(response);
        setLoading(false);
        setError(result.meta.message);
      }
      console.log("Delete post", result);
      setPost((post) => post.filter((item) => item.id !== id));
      setSuccess(result.meta.message);
    } catch (error: any) {
      setError(`Deleting error: ${error}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: any) => {
    setOpenAlert(true);
    setDeletId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      deletedPost(deleteId);
    }
    setOpenAlert(false);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `${REACT_APP_PORTAL_BE_URL}/api/post?search=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        },
      );
      const json = await response.json();
      setPost(json.data.post); // Assuming the response has an `inventory` array
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  return {
    post,
    setPost,
    page,
    totalPage,
    setPage,
    success,
    openAlert,
    handleSearch,
    handleDelete,
    handleConfirmDelete,
    handleCloseAlert,
    loading,
    error,
  };
}
