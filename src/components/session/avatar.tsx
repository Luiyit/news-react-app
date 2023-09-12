import { Avatar as AntAvatar } from 'antd';
import Text from '../styled/texts'
import { Flex, Image } from '../styled/blocks'
type AvatarSize = 'large' | 'small' | 'default' | number;

interface Props {
  name: string,
  image?: string,
  size?: AvatarSize,
  displayName?: boolean
}

const Avatar = ({ name, image, size = 35, displayName=true }: Props) => {
  const firstLetter = name?.charAt(0).toUpperCase() || ''

  return (
    <Flex align="center" >
      {displayName && <Text padding='0 5px'>{ name }</Text>}
      {image && <AntAvatar size={size} src={<Image src={image} alt="avatar" width={size as number} height={size as number} />} /> }
      {!image && firstLetter && <AntAvatar size={size}>{ firstLetter }</AntAvatar> }
    </Flex>
  )
}

export default Avatar
