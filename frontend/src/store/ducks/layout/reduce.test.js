import reduce from './index';

describe("Teste do Layout Reducer", ()=>{
    test("Layout Reducer", ()=>{
        expect(reduce(undefined, {})).toEqual({showMessage: false});
    });
    test("deve retornar o state com a props showMessage=true", ()=>{
        expect(reduce(undefined, {type: "SHOW_MESSAGE"})).toEqual({showMessage: true});
    })
    test("deve retornar o state com a props showMessage=false", ()=>{
        expect(reduce(undefined, {type: "HIDE_MESSAGE"})).toEqual({showMessage: false});
    })

})