import getSlots from "../../src/functions/getSlots";
import { describe, expect, test } from 'vitest'

describe('test unitaire getSlots', ()=>{
    test('if selectTimeSlot is empty return nothing', ()=>{
        const data = {justDate: null, dateTime:null};
        const time = getSlots(data);
        expect(time).toBe(undefined);
    });

    test('if selectTimeSlot is filled return time with multiple slots', ()=>{
        const date = new Date();
        const data = {justDate: date, dateTime:null};
        const time = getSlots(data);
        expect(time?.length).toBe(27);
    });
})