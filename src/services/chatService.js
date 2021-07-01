import { MessageRepository } from '../repository/MessageRepository';
import { getServerTime } from '../utils/index';

const messageRepository = new MessageRepository();

export function sendMessage(formValue) {
  messageRepository.set({
    text: formValue,
    createdAt: getServerTime()
  })
}

export function getMessages(onSnapshot) {
  return messageRepository.subscribe((snapshot) => {
    const postData = [];
    snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
    onSnapshot(postData);
  })
}