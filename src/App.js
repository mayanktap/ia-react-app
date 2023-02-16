import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import styles from './style';
import awsExports from './aws-exports';
import { useEffect, useState, React } from 'react';
import {
  Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Testimonials
} from './components'

import { Routes, Route } from "react-router-dom";
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  const [ fileData, setFileData ] = useState();
  const [ fileStatus, setFileStatus ] = useState(false);
  const [ s3DownloadLinks, setS3DownloadLinks] = useState([]);

  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result)
  };

  async function ListObjectsFromS3() {
    const s3Objects = await Storage.list("");
    s3Objects.map(async (item) => {
      console.log(30, item);
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks) => [
        ...s3DownloadLinks,
        downloadLink,
      ]);
    });
  }

  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, { download: true });
    return downloadBlob(result.Body, "filename");
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  }

  useEffect(() => {
    async function createTodoItem() {
      const todo = { name: "My second todo", description: "Hello world!" };

      /* create a todo */
      await API.graphql(graphqlOperation(createTodo, {input: todo}));
    }

    async function ListTodoItems() {
      const todos = await API.graphql(graphqlOperation(listTodos));
      console.log(30, todos);
    }

    ListObjectsFromS3();
    ListTodoItems();
    createTodoItem();
  }, []);

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={` ${styles.paddingX} ${styles.flexCenter} `}>
          <Navbar />
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/features" element={<Business />} />
              <Route path="/product" element={<Billing />} />
              <Route path="/carddeal" element={<CardDeal />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/cta" element={<CTA />} />
            </Routes>
            <Footer />
          </div>
        </div>
        <div>
          <h1 className='container mx-auto bg-gray-200 rounded-xl'>
            Hello {user.username}
          </h1>
          <button onClick={signOut}>Sign out</button>
          <div>
            <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
          </div>
          <div>
            <button onClick={uploadFile}>Upload file</button>
          </div>
          <div>{fileStatus ? 'File uploaded successfully' : ''}</div>
            <div>{/* List all s3 objects and download by clicking on the link */}</div>
            {s3DownloadLinks.map((item, index) => (
              <div key={index}>
                <a href={item} target="_blank" download="">
                  Link {index}
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default withAuthenticator(App);
