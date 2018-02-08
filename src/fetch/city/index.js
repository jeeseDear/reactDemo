import {get} from 'fetch/get'
export default function cityList(){
  return get(`/assets/json/city.json`)
}