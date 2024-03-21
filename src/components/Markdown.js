import React from "react";
import { useState, useEffect } from "react";

const Markdown = () => {
    const[markdown , setMarkdown] = useState("");
    const[isloading , setloading] = useState(false);

    const handleMarkDown = (e) => {
         setMarkdown(e.target.value);
    }

    useEffect(()=>{
        setloading(true);
            setTimeout(()=>{
                   setloading(false);
            },1000)
    },[markdown])

    return (
        <div id="markdown">
            <div className="textarea">
                <textarea
                     placeholder="write your text here"
                     value={markdown}
                     onChange={handleMarkDown}
                > </textarea>
             </div>
             
            <div className="preview">
                     <div className="loading">
                        {
                            isloading ? <p>loading...</p> : <p>{markdown}</p>
                        }
                     </div>
            </div>
             
        </div>
    )
}

export default Markdown;