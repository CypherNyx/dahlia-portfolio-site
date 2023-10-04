import { useState } from 'react';
import React from "react";
import { Document, Page, Text, StyleSheet, View, PDFDownloadLink,
  pdf, PDFViewer } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  
    body:{
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    contact: {
      margin: 12,
      fontSize: 11,
      color: "gold",

    },
    text: {
      margin: 12,
      fontSize: 14,
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      },
});

const DahliaResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.body} >
    <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <Text style={styles.header} fixed>DAHLIA GUIDO</Text>
      <Text style={styles.title} fixed>Junior Software Developer</Text>
      <Text style={styles.contact} >Bryan, Texas | +1 713-594-0433 | dguido.dev@gmail.com | linkedin.com/in/dahlia-guido</Text>

      <Text>Profile Summary</Text>
      <Text>Experienced graphic designer with a robust marketing and print design foundation, excitedly
        transitioning to front-end development following comprehensive coding boot camp in the MERN
        stack, proficient skills in React and MongoDB. Leveraging a 65% increase in technical proficiency, I am
        actively pursuing remote front-end roles to contribute my newfound MERN expertise.</Text>
    </Page>
  </Document>
);


export default function ResumeDahlia() {

  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>View Dahlia Resume</button> 

      {open && (
        <PDFViewer style={{width: '100vw', height: '100vh'}}>{DahliaResumePDF}</PDFViewer>
      )}
    </>
  );
  };
