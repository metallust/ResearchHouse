import { Document, Page } from "react-pdf";
import pdfFile from "./sample.pdf";

export default function Index() {
	return (
		<div>
			<Document file={pdfFile}>
				<Page />
			</Document>
		</div>
	);
}
