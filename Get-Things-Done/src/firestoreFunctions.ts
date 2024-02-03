import { db } from './firebase';
import { collection, query, addDoc, getDocs, doc, updateDoc, deleteDoc, where, getDoc, Timestamp } from 'firebase/firestore';
import { Todo } from './interfaces/Todo';
import { Event } from './interfaces/Event';
import { Memo } from './interfaces/Memo';
import { Project } from './interfaces/Project';

type ComparisonOperator = '<' | '<=' | '==' | '>' | '>=' | '!=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';

export const fetchTodos = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todo-list'));
    const docs = querySnapshot.docs.map((doc) => { 
      const data = doc.data();
      Object.keys(data).forEach((field) => {
        if ((data[field]) instanceof Timestamp) {
          data[field] = (data[field] as Timestamp).toDate();
        }
      });
      return data as Todo;
    }) as Todo[];
    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return [];
  }
}

export const fetchEvents = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, 'event-list'));
    const docs = querySnapshot.docs.map((doc) => { 
      const data = doc.data();
      Object.keys(data).forEach((field) => {
        if ((data[field]) instanceof Timestamp) {
          console.log('timestamp');
          data[field] = (data[field] as Timestamp).toDate();
          console.log(data[field]);
        }
      });
      return data as Event;
    }) as Event[];
    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return [];
  }
}

export const fetchProjects = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, 'project-folders'));
    const docs = querySnapshot.docs.map((doc) => { 
      const data = doc.data();
      data.id = (data.id as Timestamp).toDate();
      return data as Project;
    }) as Project[];
    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return [];
  }
}

export const fetchMemos = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, 'memo-list'));
    const docs = querySnapshot.docs.map((doc) => { 
      const data = doc.data();
      Object.keys(data).forEach((field) => {
        if ((data[field]) instanceof Timestamp) {
          console.log('timestamp');
          data[field] = (data[field] as Timestamp).toDate();
          console.log(data[field]);
        }
      });
      return data as Memo;
    }) as Memo[];
    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return [];
  }
}

export const fetchData = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap;
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document: ', error);
    return -1;
  }
};

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
  querySnapshot.forEach((doc) => {
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