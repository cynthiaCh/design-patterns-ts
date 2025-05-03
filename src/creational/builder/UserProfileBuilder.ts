// src/creational/builder/UserProfileBuilder.ts
import { UserProfile } from './UserProfile.js'

export interface UserProfileBuilder {
  setAvatar(url: string): this
  setBio(bio: string): this
  addInterest(interest: string): this
  setSocial(twitter?: string, github?: string): this
  build(): UserProfile
}
