// src/creational/builder/ConcreteUserProfileBuilder.ts
import { UserProfile } from './UserProfile.js';
import type { UserProfileBuilder } from './UserProfileBuilder.js';

export class ConcreteUserProfileBuilder implements UserProfileBuilder {
  private profile: UserProfile;

  constructor() {
    this.profile = new UserProfile();
  }

  setAvatar(url: string) {
    this.profile.avatarUrl = url;
    return this;
  }

  setBio(bio: string) {
    this.profile.bio = bio;
    return this;
  }

  addInterest(interest: string) {
    this.profile.interests.push(interest);
    return this;
  }

  setSocial(twitter?: string, github?: string) {
    this.profile.social = { twitter, github };
    return this;
  }

  build() {
    return this.profile;
  }
}
