import { useQuery } from "react-query";
import { getColors } from "services/colorsApi";

export const useColors = () => {
  return useQuery("colors", () => getColors().then((res) => res.data));
};
