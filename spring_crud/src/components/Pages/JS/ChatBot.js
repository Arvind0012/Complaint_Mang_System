import React, { useEffect } from 'react'

function ChatBot() {

    useEffect(()=>{
        // <script type="text/javascript">
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"cea14ca01cb0e2df18e0260d1e244af","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
// </script>
    },[])

  return (
    <>
    </>
  )
}

export default ChatBot