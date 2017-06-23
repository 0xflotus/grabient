import React from 'react'
import styled from 'styled-components'

import { AnglePrev } from './../Icons/index'
import { TextMD } from './../Common/Typography'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AngleText = TextMD.extend`
  padding-left: 10px;
  padding-top: 3px;
`

const AnglePreview = ({
  angle,
  animationDuration,
  iconAnimationDuration,
  hovered,
  editingStop,
  editingAngle,
  color
}) => {
  return (
    !editingStop &&
    <Container>
      <AnglePrev
        animationDuration={iconAnimationDuration}
        color={color}
        angle={angle}
        hovered={hovered}
        editingAngle={editingAngle}
      />

      <AngleText
        style={{
          color
        }}
      >
        {angle}°
      </AngleText>
    </Container>
  )
}

export default AnglePreview
