/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"20min"});
		cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#0369A0"},"dark":{"cal-brand":"#a90000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="20min"
	  calLink="noah-hailegiorgis-kibgfe/20min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view","theme":"light"}}
    
	  
	/>;
  };
  