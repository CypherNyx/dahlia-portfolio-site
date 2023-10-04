import React from 'react';
import ResumePDF from  '../constants/resume'
import { PDFViewer } from '@react-pdf/renderer';

const MyDocument = () => (
  <PDFViewer>

    <ResumePDF />
  </PDFViewer>
);

export default MyDocument;