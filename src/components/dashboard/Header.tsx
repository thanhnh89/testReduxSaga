import React from 'react'
import { Wrapper, InputSearch, ButtonGoto, DropBox, Blank } from './headerStyle'

interface Props {
  keyWord: string
  searchOnChange: (event: any) => void
}

const Header = (props: Props) => {
  return (
    <Wrapper>
      <InputSearch
        value={props.keyWord}
        type="text"
        onChange={(event) => props.searchOnChange(event)}
      />
      <ButtonGoto>GO TO</ButtonGoto>
      <Blank />
      <DropBox name="filter" id="filter">
        <option value="volvo">All</option>
        <option value="saab">Time</option>
        <option value="mercedes">Point</option>
      </DropBox>
    </Wrapper>
  )
}

export default Header
