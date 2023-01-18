import React from 'react'
import { Wrapper, Row, TitleField, StarIcon, Column } from './testItemStyle'
import images from '../../asset/images'

interface Props {
  name: string
  time: number
  point: number
  diff: number
  past: boolean
}

const TestItem = (props: Props) => {
  const renderStars = (number: number) => {
    const stars = []
    for (let i = 0; i < number; i++) {
      const icon = <StarIcon src={images.star1} key={i} />
      stars.push(icon)
    }
    return <div>{stars}</div>
  }

  return (
    <Wrapper>
      <Column width="70%">
        <Row>
          <TitleField>Name:</TitleField>
          {props.name}
        </Row>
        <Row>
          <TitleField>Time:</TitleField>
          {props.time}
        </Row>
        <Row>
          <TitleField>Point:</TitleField>
          {props.point}
        </Row>
        <Row>
          <TitleField>Diff:</TitleField>
          {renderStars(props.diff)}
        </Row>
        <Row>
          <TitleField>Past:</TitleField>
          <input type="checkbox" checked={props.past} readOnly></input>
        </Row>
      </Column>
      <Column>Start</Column>
    </Wrapper>
  )
}

export default TestItem
