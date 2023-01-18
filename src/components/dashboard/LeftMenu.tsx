import React from 'react'
import { Wrapper, Avata, TextField, ButtonLogout, Blank } from './leftMenuStyle'
import Images from '../../asset/images'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux-saga/action/loginAction'

interface Props {}

const LeftMenu = (props: Props) => {
  const dispatch = useDispatch()
  const dashboardData = useSelector((state: any) => state.dashboardReducer)

  return (
    <Wrapper id="LeftMenu">
      <Avata src={Images.avataDefault} alt="avata" />
      <TextField>{dashboardData.userName}</TextField>
      <TextField>Point: {dashboardData.point}</TextField>
      <TextField>Test complete: {dashboardData.testComplete}</TextField>
      <TextField>Test not complete: {dashboardData.testNotComplete}</TextField>
      <Blank />
      <ButtonLogout
        onClick={() => {
          dispatch(
            logout(
              (response: any) => {
                console.log('logout sucess')
                window.location.href = '/login'
              },
              (error: any) => {},
            ),
          )
        }}
      >
        Log out
      </ButtonLogout>
    </Wrapper>
  )
}

export default LeftMenu
