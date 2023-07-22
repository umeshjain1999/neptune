//REF : emotion-icons.dev
import { Buildings, Contact, DollarCircle } from '@emotion-icons/boxicons-solid'
import { Plus } from '@emotion-icons/boxicons-regular'
import styled from '@emotion/styled'
import { EmotionIcon } from 'emotion-icons/types'


/* type starts */
interface IconProps {
  icon: string
  color?: string
  w?: string
  h?: string
}
interface IconTypes {
  [key: string]: EmotionIcon
}
/* type ends */

const iconTypes: IconTypes = {
  contact: Contact,
  building: Buildings,
  money: DollarCircle,
  plus: Plus,
}

const Icon = ({ icon, color, w, h }: IconProps) => {

  if (iconTypes[icon]) {

    const IconWrapper = styled(iconTypes[icon])`
      color: ${color ? color : "inherit"};
      width: ${w ? w : '30px'};
      height: ${h ? h : '30px'};
  `
    let Icon = iconTypes[icon]
    return <IconWrapper><Icon /></IconWrapper>
  } else {
    return <span></span>
  }
}

export default Icon