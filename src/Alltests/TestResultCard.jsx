import { IoIosMail } from "react-icons/io";
import jsPDF from 'jspdf';
const TestResultCard = ({singleReservation}) => {
    const {image , testName , report ,email} = singleReservation;
    const handleDownload = () => {
        const doc = new jsPDF();
    
        // Add title
        doc.setFontSize(22);
        doc.text(testName, 20, 20);
    
        // Add email
        doc.setFontSize(16);
        doc.text(`Email: ${email}`, 20, 40);
    
        // Add report
        doc.setFontSize(16);
        doc.text(`Report: ${report}`, 20, 60);
    
        // Add image
        const img = new Image();
        img.src = image;
        img.onload = () => {
          doc.addImage(img, 'JPEG', 20, 80, 170, 100);
          doc.save(`${testName}_Report.pdf`);
        };
      };
    return (
        <div>
        <div className="max-w-xs lg:max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-0 md:p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-lg md:text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{testName}</h2>
                <p className="font-poppins text-center pt-4 text-sm md:text-lg"><IoIosMail className="inline text-2xl" /> {email}</p>
                <p className="font-poppins font-semibold text-center pt-4 text-sm md:text-lg">Report: {report}</p>
            </div>
            <button onClick={handleDownload} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Download Report</button>
        </div>
    </div>
    </div>
    );
};

export default TestResultCard;