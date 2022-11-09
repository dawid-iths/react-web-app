import { useEffect, useRef } from "react";
import { useCookies } from 'react-cookie'

const CookieComponent = () => {
  const cookieName : string = 'ITHS-Demo-Cookie';
  const [cookie, setCookie] = useCookies([cookieName]); 
  let cookieArray: string[] = document.cookie.split(';');
  const mutableCookieArray = useRef(cookieArray);

  const setCookies = () => {
    let dateNow : Date = new Date();
    let minutes : number = 1;
    let expireDate: Date = new Date(dateNow.getTime() + minutes * 10000);

    // setCookie(cookieName, navigator.userAgent, { expires: expireDate });
    setCookie(cookieName, expireDate, { expires: expireDate, httpOnly: false });
    //setCookie(cookieName, "Dawid was here!", {  httpOnly: false });
  };

  useEffect(() => {
    mutableCookieArray.current = document.cookie.split(';');
  }, [cookie]);

  return (
    <>
      <h1>Cookie Demo</h1>
      <button onClick={setCookies}>Create Cookie</button>
      <h2>Cookie values</h2>
      <ul>
        {mutableCookieArray.current.map((cookie, index) => (
          <li key={index}>{cookie.replace(/[%20\s]/g, ' ')}</li>
        ))}
      </ul>
    </>
  );
};

export default CookieComponent;