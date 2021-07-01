import { FirebaseRepository, Collections } from "./firebaseRepository";

export class MessageRepository extends FirebaseRepository {
  constructor() {
    super(Collections.Messages);
  }
}