import { useState, useEffect } from "react";

export default function Yo() {
  let [name, setName] = useState();

  useEffect(() => {
    async function getHomie() {
      let res = await fetch("/api/yo");
      if (res.ok) {
        let { yo } = await res.json();
        console.log({ yo });
        setName(yo);
      }
    }
    getHomie();
  }, []);

  return <div>yo {name}</div>;
}
