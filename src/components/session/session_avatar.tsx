import React from 'react'
import { Avatar as AntAvatar, Dropdown } from 'antd';
import Text from '../styled/texts'
import { Div, Flex, Image } from '../styled/blocks'
import { useCurrentUser } from '../hooks/use_current_user';
import getMenu from '../../config/profile_menu'
type AvatarSize = 'large' | 'small' | 'default' | number;

interface Props {
  disabled?: boolean,
  size?: AvatarSize,
  displayName?: boolean
}

const Avatar = ({ disabled, size = 35, displayName=true }: Props) => {
  const { isAuthenticated, currentUser } = useCurrentUser()
  if(!isAuthenticated || !currentUser) return null

  const menuItems = getMenu();
  const firstLetter = (currentUser.name || currentUser.email).charAt(0).toUpperCase() || ''
  const AvatarContainer = menuItems?.length ? Dropdown : Div
  const emailName = (currentUser.email || "").split("@")[0]
  const imageUrl = currentUser.image || '';

  return (
    <AvatarContainer 
      className="ant-avatar-dropdown"
      overlayClassName="ant-avatar-dropdown-overlay"
      menu={{ items: menuItems, style: { fontSize: "14px"} }} 
      disabled={disabled}
    >
      <Flex onClick={(e: React.MouseEvent<HTMLDivElement>) => e.preventDefault()} align="center" >
        {displayName && <Text padding='0 5px'>{ currentUser.name || emailName }</Text>}
        {imageUrl && (
          <AntAvatar 
            size={size} 
            src={
              <Image 
                as="img" 
                src={imageUrl} 
                alt="avatar" 
                width={size as number} 
                height={size as number} 
            />} 
          /> 
        )}
        {!imageUrl && <AntAvatar >{ firstLetter }</AntAvatar> }
      </Flex>
    </AvatarContainer>
  )
}

export default Avatar
