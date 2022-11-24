import {useState} from 'react';
import useScanDetection from "use-scan-detection";

function BarCodeDetection() {
const [barcodeScan, setBarcodeScan]=useState("No Barcode Scanned");
  
useScanDetection({
    onComplete: setBarcodeScan,
    minLength: 3
})

return (
<div>
        {/* <h4>BarCodeDetection</h4> */}
        <p>
            Barcode:{barcodeScan}
        </p>
    </div>
  );
}

export default BarCodeDetection;