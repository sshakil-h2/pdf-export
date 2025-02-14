import * as React from 'react';
import chart from './chart'
import ReactPDF, {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
} as any);

Font.register({
  family: 'Open Sans',
  src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register({
  family: 'Lato',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
});
Font.register({
  family: 'Lato Italic',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: 'Lato Bold',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
});


const Resume = props => {
  return <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src={props.image}
          style={styles.image}
        />
        <Education />
        <Skills />
      </View>
      <Experience />
    </View>
    <Text style={styles.footer}>This IS the candidate you are looking for</Text>
  </Page>
};


const Output = ({ image }) => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume image={image} size="A4" />
    <Resume image={image} orientation="landscape" size="A4" />
    <Resume image={image} size={[380, 1250]} />
  </Document>
);

async function report(filename) {
  const image = await chart();
  ReactPDF.render(<Output image={image} />, `${__dirname}/pdf/output${filename}.pdf`);
}

export async function loop() {
  for (let i = 1; i <= 100; i++) {
    await report(i.toString())
    console.log(i, 'done', (new Date()).toTimeString())
  }
}

