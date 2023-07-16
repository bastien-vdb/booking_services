type slotType = {
    id:string | number;
    from: number;
    to: number;
    free: boolean;
    customer?: string;
};

export default slotType;