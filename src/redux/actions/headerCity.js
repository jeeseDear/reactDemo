import qq from 'qq';
import * as ACTIONS from 'common/js/headerCity'
const requestCity = ()=>({
  type:ACTIONS.FAILUER_CITY
})
const receiveCity = (city)=>({
  type:ACTIONS.HEADER_CITY,
  city
})
export const getCity = ()=>(
  dispatch =>{
    let da
    let qq1 = new qq.maps.Geolocation("4HSBZ-MV3KP-RIADL-LH6WO-F5MYT-XSF5C",'myapp')
    qq1.getLocation((data)=>{
      da = data
      dispatch(receiveCity(data))
    }, (data)=>{
      dispatch(requestCity())
     
    })
    return new Promise((resolve)=>{
      resolve(da)
    })
  }
)
