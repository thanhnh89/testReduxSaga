import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Wrapper,
  PopupLoginWrapper,
  Text,
  Row,
  Input,
  Button,
  Blank,
} from './loginStyle'
import { login as createLoginAction } from '../../redux-saga/action/loginAction'

const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    userName: '',
    password: '',
  })

  const login = () => {
    dispatch(
      createLoginAction(
        state.userName,
        state.password,
        (response: any) => {
          window.location.href = '/'
        },
        (error: any) => {
          console.log('error')
        },
      ),
    )
  }

  const handleUserName = (event: any) => {
    setState({ ...state, userName: event.target.value })
  }

  const handlePassword = (event: any) => {
    setState({ ...state, password: event.target.value })
  }

  return (
    <Wrapper>
      <PopupLoginWrapper>
        <Text color="#d3c8c8" fontSize={25}>
          LOGIN
        </Text>
        <Row>
          <Text color="#d3c8c8" fontSize={20}>
            User name
          </Text>
          <Input value={state.userName} onChange={handleUserName} />
        </Row>
        <Blank height={0.2} />
        <Row>
          <Text color="#d3c8c8" fontSize={20}>
            Password
          </Text>
          <Input
            value={state.password}
            onChange={handlePassword}
            type="password"
          />
        </Row>
        <Button onClick={login}>Login</Button>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Login
