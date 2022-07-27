import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState } from "react";


export default function Home() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const [state, setState] = useState({selectedFile: null})

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      console.log("i" ,i)
      setCreateObjectURL(URL.createObjectURL(i));
      setState({ selectedFile: event.target.files[0] })
    }
  };
  const submitContact = async (event) => {
    event.preventDefault();
    // const name = event.target.inp_img;
    // const files = event.target.file;
    // console.log(files);

    // const body = new FormData();
    // body.append("file", image);
    // console.log(body)

    console.log(state.selectedFile);
    // axios.post('http://0.0.0.0:8000/object-detection', state.selectedFile)
    axios({
      method: 'get',
      url: 'http://0.0.0.0:8000',
      responseType: 'stream'
    })

  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Object Detection API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Object Detection API
        </h1>

        <p className={styles.description}>
          get started with your image
        </p>

  
        <form method='POST' onSubmit={submitContact} className={styles.grid}>
          <div className={styles.card}>
            <h2>Input Image</h2>
            <div className={styles.img_container}>
              <img src={createObjectURL} className={styles.img} />
            </div>
            <div className={styles.upload}>
              <input type="file" name="inp_img" id='inp_img' onChange={uploadToClient} />
              
              <button type='submit' >submit</button>
            
            </div>
            
          </div>

          <div className={styles.card}>
            <h2>Output Image</h2>
            <div className={styles.img_container}>
              <img src="" className={styles.img} />
            </div>
            
            
          </div>
        </form>
          
      </main>
    </div>
  )
}
