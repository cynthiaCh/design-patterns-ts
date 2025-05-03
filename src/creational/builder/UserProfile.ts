// src/creational/builder/UserProfile.ts
export class UserProfile {
  avatarUrl?: string;
  bio?: string;
  interests: string[] = [];
  social?: { twitter?: string; github?: string };

  toString() {
    return JSON.stringify(this, null, 2);
  }
}
