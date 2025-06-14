import { Injectable } from '@angular/core';
import { Auth, authState, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Credential } from '../interfaces/credential.interface';

@Injectable({ providedIn: 'root' })

export class AuthService {
  constructor(private auth: Auth) { }

  readonly authState$ = authState(this.auth);

  public signUpInWithEmail(credential: Credential): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  public logInWithEmail(credential: Credential): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  public logOut(): Promise<void> {
    return this.auth.signOut();
  }

  public getCurrentUserId(): string | null {
    return this.auth.currentUser?.uid || null;
  }
}