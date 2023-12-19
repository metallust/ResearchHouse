import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/cjs/";

function Pdf() {
	const [page, setPage] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setPage(1);
	};
	return (
		<div>
			<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={page} height={600} />
			</Document>
		</div>
	);
}

export default Pdf;
