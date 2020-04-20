import {addCar} from './cars';
import reduce from './cars';
const state = {
    type: addCar.type,
    payload:{
        name: "audi",
        url: "https://localhost"
    }
}
describe("Cars Test", ()=>{
    describe("Action Creators Test", ()=>{
        test("deve retornar o tipo ADD_CAR", ()=>{
            expect(addCar()).toEqual({type: "ADD_CAR"})
        })
    });
    describe("Reduce Creator", ()=>{
        test("deve retornar um array de carros", ()=>{
            expect(reduce([], state)).toEqual([{
                name: "audi",
                url: "https://localhost"
            }])
        })
    })
})