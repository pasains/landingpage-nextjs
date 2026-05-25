import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export enum PostType {
  "ARTICLE" = "ARTICLE",
  "REPORT" = "TRIP REPORT",
  "TRAINING" = "TRAINING",
}

export type PostDetail = {
  id: number;
  type: PostType;
  title: string;
  headerPhoto: string;
  place: string;
  writer: string;
  date: string;
  generation: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  fourthParagraph: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  captionFirstImage: string;
  captionSecondImage: string;
  captionThirdImage: string;
  photoCollage: string[];
  captionPhotoCollage: string;
  quote: string;
  nameQuote: string;
  createdAt: Date;
};
type Params = {
  id: string;
};

export function usePostDetail() {
  const { id } = useParams<Params>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [postDetail, setPostDetail] = useState<PostDetail>({} as PostDetail);

  const REACT_APP_PORTAL_BE_URL = process.env.NEXT_PUBLIC_PORTAL_BE_URL;
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${REACT_APP_PORTAL_BE_URL}/api/post/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        setLoading(false);
        console.log("Fetched Data Post Detail:", data);
        setPostDetail(data);
      } catch (err) {
        setLoading(false);
        setError(`Fetching error: ${err} `);
        throw err;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { id, postDetail, loading, error };
}
