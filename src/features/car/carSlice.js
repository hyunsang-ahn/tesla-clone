import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y", "CyberTruck", "Powerwall"],
  sideBar: ["신규 인벤토리",
    "인증중고 인벤토리",
    "보상 판매",
    "Roadster",
    "충전",
    "상업용 에너지",
    "공익사업",
    "에너지",
    "법인 판매",
    "Tesla 찾기",
    "이벤트",
    "지원",
    "투자자 정보",

  ]
}


const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {}
})


export const selectCar = state => state.car.cars

export const selectSideBar = state => state.car.sideBar

export default carSlice.reducer