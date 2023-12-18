import React, { useState } from 'react';
import XLSX from 'xlsx';
import Table from '../Table';

const AddStdFile = () => {
  const [fileContent, setFileContent] = useState([]);
  const headers = ["#", "PRN", "Email", "Branch", "Batch"];
  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);

      const workbook = XLSX.read(data, { type: 'array' });

      // Assuming there is only one sheet in the Excel file
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert the sheet to a 2D array
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Now, you can set the file content using the state
      console.log(rows);
      setFileContent(rows);
      // console.log(Object.values(fileContent).length);
      // Reset the value of the file input to clear the selected file
      // event.target.value = null;
    };

    reader.readAsArrayBuffer(file);
  };

  // const handleShowContent = () => {
  //   // Access the file content from the state and do something with it
  //   console.log(Object.keys(fileContent), Object.values(fileContent)[0]);
  // };

  return (
    <div>
      <input type="file" id="AddStudentFile" onChange={handleFileSelect} />
      {/* <button onClick={handleShowContent}>Show Content</button> */}

      {/* Display the content of the file */}
      {fileContent && (

        <div>
          <h3>File Content:</h3>
          <Table header={headers} body={Object.values(fileContent).slice(0, Object.values(fileContent).length)} />
        </div>
      )}
    </div>
  );
};

export default AddStdFile;
