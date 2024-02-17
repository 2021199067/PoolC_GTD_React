import { db } from './firebase';
import { collection, query, addDoc, getDocs, doc, updateDoc, deleteDoc, where, getDoc, QuerySnapshot, DocumentSnapshot, Timestamp, onSnapshot } from 'firebase/firestore';
import { Todo } from './interfaces/Todo';
import { Event } from './interfaces/Event';
import { Memo } from './interfaces/Memo';
import { Project } from './interfaces/Project';

type ComparisonOperator = '<' | '<=' | '==' | '>' | '>=' | '!=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';

// export const fetchMemos= (setList: React.Dispatch<React.SetStateAction<Memo[]>>) => {
//   try {
//     const unsubscribe = onSnapshot(collection(db, 'memo-list'), (querySnapshot) => {
//       const updatedList = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         if (!('completed' in data)) {
//           data.completed = false;
//         }
//         Object.keys(data).forEach((field) => {
//           if ((data[field]) instanceof Timestamp) {
//             console.log('timestamp');
//             data[field] = (data[field] as Timestamp).toDate();
//             console.log(data[field]);
//           }
//         });
//         return { docRef: doc.id, ...data} as Memo;
//       }) as Memo[];
//       updatedList.sort((a, b) => a.id.getTime() - b.id.getTime());
//       setList(updatedList);
//     })
//     return unsubscribe;
//   } catch (error) {
//     console.error('Error fetching documents: ', error);
//     return () => {};
//   }
// };

// export const fetchTodos= (setList: React.Dispatch<React.SetStateAction<Todo[]>>) => {
//   try {
//     const unsubscribe = onSnapshot(collection(db, 'todo-list'), (querySnapshot) => {
//       const updatedList = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         if (!('completed' in data)) {
//           data.completed = false;
//         }
//         Object.keys(data).forEach((field) => {
//           if ((data[field]) instanceof Timestamp) {
//             console.log('timestamp');
//             data[field] = (data[field] as Timestamp).toDate();
//             console.log(data[field]);
//           }
//         });
//         return { docRef: doc.id, ...data} as Todo;
//       }) as Todo[];
//       updatedList.sort((a, b) => a.id.getTime() - b.id.getTime());
//       setList(updatedList);
//     })
//     return unsubscribe;
//   } catch (error) {
//     console.error('Error fetching documents: ', error);
//     return () => {};
//   }
// };

// export const fetchEvents= ( setList: React.Dispatch<React.SetStateAction<Event[]>>) => {
//   try {
//     const unsubscribe = onSnapshot(collection(db, 'event-list'), (querySnapshot) => {
//       const updatedList = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         if (!('completed' in data)) {
//           data.completed = false;
//         }
//         Object.keys(data).forEach((field) => {
//           if ((data[field]) instanceof Timestamp) {
//             console.log('timestamp');
//             data[field] = (data[field] as Timestamp).toDate();
//             console.log(data[field]);
//           }
//         });
//         return { docRef: doc.id, ...data} as Event;
//       }) as Event[];
//       updatedList.sort((a, b) => a.id.getTime() - b.id.getTime());
//       setList(updatedList);
//     })
//     return unsubscribe;
//   } catch (error) {
//     console.error('Error fetching documents: ', error);
//     return () => {};
//   }
// };

// export const fetchProjects= (setList: React.Dispatch<React.SetStateAction<Project[]>>) => {
//   try {
//     const unsubscribe = onSnapshot(collection(db, 'project-folders'), (querySnapshot) => {
//       const updatedList = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         data.id = (data.id as Timestamp).toDate();
//         return { docRef: doc.id, ...data} as Project;
//       }) as Project[];
//       updatedList.sort((a, b) => a.id.getTime() - b.id.getTime());
//       setList(updatedList);
//     })
//     return unsubscribe;
//   } catch (error) {
//     console.error('Error fetching documents: ', error);
//     return () => {};
//   }
// };

export const fetchCollection = <T extends Event | Project | Todo | Memo>(collectionName: string, setList: React.Dispatch<React.SetStateAction<T[]>>) => {
  try {
    const unsubscribe = onSnapshot(collection(db, collectionName), (querySnapshot: QuerySnapshot) => {
      const updatedList = querySnapshot.docs.map((doc: DocumentSnapshot) => {
        const data = doc.data();
        if (!('completed' in data)) {
          data.completed = false;
        }
        Object.keys(data).forEach((field) => {
          if ((data[field]) instanceof Timestamp) {
            // console.log('timestamp');
            data[field] = (data[field] as Timestamp).toDate();
            // console.log(data[field]);
          }
        });
        return { docRef: doc.id, ...data} as T;
      }) as T[];
      updatedList.sort((a, b) => a.id.getTime() - b.id.getTime());
      setList(updatedList);
    })
    return unsubscribe;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return () => {};
  }
}

export const addData = async (collectionName: string, data: any) => {
  try {
    const newDocRef = await addDoc(collection(db, collectionName), data);
    return newDocRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    return -1;
  }
};

export const updateData = async (collectionName: string, docId: string, newData: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const oldData = await getDoc(docRef);
    await updateDoc(docRef, newData);
    return oldData;
  } catch (error) {
    console.error('Error updating document: ', error);
    return -1;
  }
};

export const queryData = async (collectionName: string, fieldName: string, operator: ComparisonOperator, queryValue: any) => {
  const q = query(collection(db, collectionName), where(fieldName, operator, queryValue));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: DocumentSnapshot) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return querySnapshot;
};

export const deleteData = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return docRef;
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
};