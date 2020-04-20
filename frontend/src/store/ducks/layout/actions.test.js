import { showMessage, hideMessage} from './index';

describe("Layout Actions", ()=>{
    describe("Actions Types", ()=>{
        test("deve retornar a actionType SHOW_MESSAGE", ()=>{
            expect(showMessage.type).toEqual('SHOW_MESSAGE');
        });
        test("deve retornar a actionType HIDE_MESSAGE", ()=>{
            expect(hideMessage.type).toEqual("HIDE_MESSAGE");
        })
    });
    describe("Actions Creators", ()=>{
        test("deve retornar a action creator showMessage", ()=>{
            expect(showMessage()).toEqual({type: showMessage.type});
        });
        test("deve retornar a action creator hideMessage", ()=>{
            expect(hideMessage()).toEqual({type: hideMessage.type})
        })
    })
})