import { atom, selector } from 'recoil';

 export const  countState = atom({
  default:0,
  key:"counter"
 })

 export const componentselector = selector({
  key:"isevenselector",
  get:function({get}){
    const currentcount = get(countState)
    const isevn = (currentcount % 2==0)
    return isevn
  }
 })