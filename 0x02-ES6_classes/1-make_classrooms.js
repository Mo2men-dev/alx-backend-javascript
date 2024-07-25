import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const cRoom1 = new ClassRoom(19);
  const cRoom2 = new ClassRoom(20);
  const cRoom3 = new ClassRoom(34);

  return [cRoom1, cRoom2, cRoom3];
}
