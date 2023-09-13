import { Divider } from "antd";
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { NavLink } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'

const SignOutButton = () => {
  const signOut = useSignOut()
  const logout = () => {
    signOut();
    window.location.reload();
  }
  return (
    <div onClick={() => logout()}>Sign Out</div>
  )
}

export const fixedOptions: MenuItemType[] = [
  {
    label: (
      <NavLink to="/settings">
        Settings
      </NavLink>
    ),
    key: 'settings',
  },
]

const signOutMenu:  MenuItemType[] = [
  {
    label: <Divider style={{margin: "0"}} />,
    key: 'divider-2',
  },
  {
    label:<SignOutButton />,
    key: 'sign_out',
  },
]


export default function menu(): MenuItemType[]{
  return [
    ...fixedOptions,
    ...signOutMenu
  ]
}