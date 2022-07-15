import axios from "axios";

export const fetchPage = async (url: string): Promise<string | undefined> => {
  const HTMLData = await axios
    .get(url)
    .then(res => res.data);

  return HTMLData;
}
