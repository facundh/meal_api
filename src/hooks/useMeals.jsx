import { useContext } from "react";
import { MealsContext } from "../context/MealsProvider";

export const useMeals = () => {
    return useContext(MealsContext);
}