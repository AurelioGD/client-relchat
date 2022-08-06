import React from "react"
import Image from "../styled/Image"
import { AllIcons } from "../consts/allIcons"

const Icon = ({ iconName = "circleNone", width="2rem", height="2rem" }) => {
  const iconToUse = AllIcons[iconName]
  return <Image src={iconToUse} width={width} height={height} />
}

export default Icon
