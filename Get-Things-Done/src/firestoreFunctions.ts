import { db } from './firebase';
import { collection, query, addDoc, getDocs, doc, updateDoc, deleteDoc, where, getDoc } from 'firebase/firestore';
import { Todo } from './interfaces/Todo';
import { Memo } from './interfaces/Memo';
import { Project } from './interfaces/Project';

type ComparisonOperator = '<' | '<=' | '==' | '>' | '>=' | '!=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';

export const fetchAllData = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs: ( Memo | Todo | Event | Project )[] = querySnapshot.docs.map((doc) => { 
      const data = doc.data();
      if (data.type === 'todo') {
        return { id: doc.id, ...data,} as Todo;
      } else if (data.type === 'memo') {
        return {id: doc.id, ...data,} as Memo;
      } else if (data.type === 'event') {
        return { id: doc.id, ...data, } as Event;
      } else if (data.type === 'project') {
        return { id: doc.id, ...data,} as Project;
      } else {
        throw new Error (`Unexpected type: ${data.type}`);
      }
    });
    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return [];
  }
};

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