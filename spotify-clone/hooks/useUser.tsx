

import { Subscription, UserDetails } from "../types"

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails |  null;
  isLoading: boolean;
  subscription: Subscription | null;
}