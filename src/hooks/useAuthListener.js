import { useEffect, useState, useContext } from 'react';
import { AwsContext } from '../context/aws';

export default function useAuthListener(username, password) {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem(currentUser))
  );
  const { auth } = useContext(AwsContext);

  useEffect(async () => {
    let user = null;
    try {
      user = await auth.signIn(username, password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setcurrentUser(user);
    } catch (error) {
      localStorage.removeItem('currentUser');
      setcurrentUser(null);
    }
    return () => user();
  }, []);

  return { currentUser };
}
