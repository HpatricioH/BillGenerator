export interface MenuModalProps {
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>
  email: string 
  image: string 
  name: string 
  signOut: () => void
}
