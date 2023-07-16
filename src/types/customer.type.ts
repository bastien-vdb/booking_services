import slotType from "./slot.type";

export type customerType = {
  id: string;
  name: string;
  firstname?: string;
  slotbooked?: slotType[];
};

export default customerType;
