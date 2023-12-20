import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "./sample.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Index() {
	return (
		<div>
			<Document file={pdfFile}>
				<Page />
			</Document>
		</div>
	);
}
