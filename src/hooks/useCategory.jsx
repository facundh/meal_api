import { useContext } from "react";
import { CategoryConsumer } from "../context/CategoryProvider";

export const useCategories = () => {
    return useContext(CategoryConsumer);
}