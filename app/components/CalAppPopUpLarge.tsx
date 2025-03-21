/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "~/components/ui/button"

export default function CalAppPopUpLarge() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "1hr" });
            cal("ui", { "theme": "dark", "cssVarsPerTheme": { "light": { "cal-brand": "#0369A0" }, "dark": { "cal-brand": "#0369A0" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <Button
            data-cal-namespace="1hr"
            data-cal-link="noah-hailegiorgis-kibgfe/1hr"

            data-cal-config='{"layout":"month_view","theme":"light"}'
            size="lg"
            className="text-lg h-12"
        >
            Get Started
        </Button>
    )
};
