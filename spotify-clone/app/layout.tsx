
import Sidebar from '../components/Sidebar'
import ModalProvider from '../providers/ModalProvider'
import SupabaseProvider from '../providers/SupabaseProvider'
import UserProvider from '../providers/UserProvider'
import './globals.css'


export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>
            {children}
          </Sidebar>
          </UserProvider> 
        </SupabaseProvider>
      </body>
    </html>
  )
}
