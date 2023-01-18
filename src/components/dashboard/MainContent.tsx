import React from 'react'
import { Wrapper, WrapperTests } from './mainContentStyle'
import Header from './Header'
import TestItem from './TestItem'

interface Props {
  data: any[]
  keyWord: string
  searchOnChange: (event: any) => void
}

const MainContent = (props: Props) => {
  const renderTests = () => {
    const items = []
    for (const itemData of props.data) {
      const item = (
        <TestItem
          name={itemData.name}
          point={itemData.point}
          time={itemData.time}
          diff={itemData.diff}
          past={itemData.past}
          key={itemData.name}
        />
      )
      items.push(item)
    }
    return <WrapperTests>{items}</WrapperTests>
  }

  return (
    <Wrapper>
      <Header keyWord={props.keyWord} searchOnChange={props.searchOnChange} />
      {renderTests()}
      {/* <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        style={{
          marginBottom: '1em',
        }}
      /> */}
    </Wrapper>
  )
}

export default MainContent
