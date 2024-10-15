import { getCarsData } from "@/api/api";
import { DropDown } from "../DropDown/DropDown";

export const DropDownFetch = async () => {
    const carsData = await getCarsData();
    return (
        <DropDown cars={carsData.Results} />
    );
}